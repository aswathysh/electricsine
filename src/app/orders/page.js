"use client";
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserOrders } from '@/services/OrderServices';
import { CircularProgress, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { Header } from '@/components/sharables/Header';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import { UserHeader } from '@/components/practice/UserHeader';

export default function OrdersPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['orders'],
    queryFn: getUserOrders,
  });

  const renderContent = () => {
    if (isLoading) {
      return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20%' }}>
          <CircularProgress />
        </div>
      );
    }

    if (error) {
      return (
        <Typography color="error" sx={{ mt: 4, textAlign: 'center' }}>
          Failed to load orders
        </Typography>
      );
    }

    const orders = Array.isArray(data?.orders) ? data.orders : (Array.isArray(data?.data) ? data.data : []);
    // Flatten items with reference to order
    const itemRows = orders.flatMap((order) =>
      (order.items || []).map((it) => ({
        ...it,
        order_id: order.id,
        order_date: order.created_at,
        order_status: order.status,
      }))
    );
    return (
      <>
        <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
          Order History
        </Typography>
        {itemRows.length === 0 ? (
          <Typography>No orders found.</Typography>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Amount (₹)</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {itemRows.map((item, index) => (
                <TableRow key={`${item.order_item_id}-${index}`}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    {item.image && (
                      <Image src={`https://rubiksoftwares.com/demoelectric/public${item.image}`} alt={item.title} width={60} height={40} style={{ objectFit: 'cover' }} />
                    )}
                  </TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.order_date ? new Date(item.order_date).toLocaleDateString() : '-'}</TableCell>
                  <TableCell>{item.order_status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </>
    );
  };

  return (
    <div>
      <UserHeader />
      <Grid
        container
        style={{ justifyContent: 'center', backgroundColor: '#012967 !important', minHeight: '100vh' }}
        className="light_bg"
      >
        <Grid
          item
          size={{ xs: 11, md: 10, lg: 8, sm: 11 }}
          sx={{ backgroundColor: 'white', p: { xs: 2, sm: 4 }, mt: { xs: 3, sm: 6 }, borderRadius: 1 }}
        >
          {renderContent()}
        </Grid>
      </Grid>
    </div>
  );
}