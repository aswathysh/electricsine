"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserOrders } from "@/services/OrderServices";
import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TableContainer,
  Paper,
  Chip,
  Box,
} from "@mui/material";
import { Header } from "@/components/sharables/Header";
import Grid from "@mui/material/Grid2";
import Image from "next/image";

const getStatusColor = (status) => {
  const s = (status || "").toLowerCase();
  if (s.includes("deliver") || s.includes("complete"))
    return { bg: "#E6F7ED", color: "#1B8354" };
  if (s.includes("cancel") || s.includes("fail"))
    return { bg: "#FDEAEA", color: "#D32F2F" };
  if (s.includes("pending") || s.includes("process"))
    return { bg: "#FFF4E0", color: "#B8790C" };
  return { bg: "#E8EEFB", color: "#012967" };
};

const cellFontSx = { fontSize: { xs: "14px", md: "17px" } };

export default function OrdersPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["orders"],
    queryFn: getUserOrders,
  });

  const renderContent = () => {
    if (isLoading) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20%",
          }}
        >
          <CircularProgress sx={{ color: "#012967" }} />
        </div>
      );
    }

    if (error) {
      return (
        <Typography color="error" sx={{ mt: 4, textAlign: "center" }}>
          Failed to load orders
        </Typography>
      );
    }

    const orders = Array.isArray(data?.orders)
      ? data.orders
      : Array.isArray(data?.data)
        ? data.data
        : [];
    // Flatten items with reference to order
    const itemRows = orders.flatMap((order) =>
      (order.items || []).map((it) => ({
        ...it,
        order_id: order.id,
        order_date: order.created_at,
        order_status: order.status,
      })),
    );
    return (
      <>
        <Box sx={{ mb: 3, textAlign: { xs: "center", sm: "left" } }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: { xs: "1.6rem", sm: "2rem", md: "2.25rem" },
              background: "linear-gradient(90deg, #012967, #0148B2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Order History
          </Typography>
          <Box
            sx={{
              width: 56,
              height: 4,
              borderRadius: 2,
              background: "linear-gradient(90deg, #012967, #0148B2)",
              mt: 1,
              mx: { xs: "auto", sm: 0 },
            }}
          />
        </Box>

        {itemRows.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 6, color: "#8A94A6" }}>
            <Typography variant="h6">No orders found.</Typography>
            <Typography variant="body2">
              Your order history will show up here.
            </Typography>
          </Box>
        ) : (
          <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              overflowX: "auto",
              borderRadius: 2,
              border: "1px solid #EDF0F5",
              boxShadow: "0 4px 20px rgba(1, 41, 103, 0.06)",
            }}
          >
            <Table sx={{ minWidth: 620 }}>
              <TableHead>
                <TableRow
                  sx={{
                    background: "linear-gradient(90deg, #012967, #0148B2)",
                  }}
                >
                  {[
                    "#",
                    "Image",
                    "Subject",
                    "Amount (₹)",
                    "Date",
                    "Status",
                  ].map((head) => (
                    <TableCell
                      key={head}
                      sx={{
                        color: "#fff",
                        fontWeight: 600,
                        letterSpacing: 0.3,
                        border: "none",
                        ...cellFontSx,
                      }}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {itemRows.map((item, index) => {
                  const statusStyle = getStatusColor(item.order_status);
                  return (
                    <TableRow
                      key={`${item.order_item_id}-${index}`}
                      sx={{
                        transition:
                          "background-color 0.2s ease, transform 0.2s ease",
                        "&:nth-of-type(even)": { backgroundColor: "#FAFBFE" },
                        "&:hover": {
                          backgroundColor: "#F0F4FF",
                        },
                      }}
                    >
                      <TableCell
                        sx={{
                          color: "#8A94A6",
                          fontWeight: 500,
                          ...cellFontSx,
                        }}
                      >
                        {index + 1}
                      </TableCell>
                      <TableCell>
                        {item.image && (
                          <Box
                            sx={{
                              borderRadius: 1.5,
                              overflow: "hidden",
                              width: 60,
                              height: 40,
                              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                            }}
                          >
                            <Image
                              src={`https://rubiksoftwares.com/demoelectric/public${item.image}`}
                              alt={item.title}
                              width={60}
                              height={40}
                              style={{ objectFit: "cover", display: "block" }}
                            />
                          </Box>
                        )}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: 500,
                          color: "#1A2233",
                          ...cellFontSx,
                        }}
                      >
                        {item.title}
                      </TableCell>
                      <TableCell
                        sx={{
                          fontWeight: 600,
                          color: "#012967",
                          ...cellFontSx,
                        }}
                      >
                        ₹{item.price}
                      </TableCell>
                      <TableCell sx={{ color: "#5A6478", ...cellFontSx }}>
                        {item.order_date
                          ? new Date(item.order_date).toLocaleDateString()
                          : "-"}
                      </TableCell>
                      <TableCell sx={cellFontSx}>
                        <Chip
                          label={item.order_status || "-"}
                          size="small"
                          sx={{
                            backgroundColor: statusStyle.bg,
                            color: statusStyle.color,
                            fontWeight: 600,
                            border: "none",
                            fontSize: "inherit",
                          }}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </>
    );
  };

  return (
    <div>
      <Header />
      <Grid
        container
        style={{
          justifyContent: "center",
          backgroundColor: "#ffffff",
          minHeight: "100vh",
        }}
        className="light_bg"
      >
        <Grid
          item
          size={{ xs: 12, sm: 11, md: 10, lg: 8 }}
          sx={{
            backgroundColor: "#ffffff",
            p: { xs: 2, sm: 3, md: 4 },
            mt: { xs: 2, sm: 4, md: 6 },
            mx: { xs: 0, sm: "auto" },
            borderRadius: 3,
            boxShadow: { xs: "none", sm: "0 10px 40px rgba(1, 41, 103, 0.08)" },
          }}
        >
          {renderContent()}
        </Grid>
      </Grid>
    </div>
  );
}
