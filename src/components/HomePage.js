import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, Box } from '@mui/material';

function HomePage() {
  return (
    <Box>
      {/* Banner Section */}
      <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Landing Page
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* Banner */}
        <Box
          sx={{
            backgroundColor: '#f5f5f5',
            padding: '50px 20px',
            textAlign: 'center',
            borderRadius: '8px',
            mb: 4,
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome to Our Website!
          </Typography>
          <Typography variant="h6" component="p">
            Discover amazing content and services
          </Typography>
        </Box>

        {/* Promotions Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Promotions
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Promotion 1
                  </Typography>
                  <Typography variant="body2" component="p">
                    Description of promotion 1.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Promotion 2
                  </Typography>
                  <Typography variant="body2" component="p">
                    Description of promotion 2.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Promotion 3
                  </Typography>
                  <Typography variant="body2" component="p">
                    Description of promotion 3.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Service Cards Section */}
        <Box>
          <Typography variant="h4" component="h2" gutterBottom>
            Our Services
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Service 1
                  </Typography>
                  <Typography variant="body2" component="p">
                    Description of service 1.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Service 2
                  </Typography>
                  <Typography variant="body2" component="p">
                    Description of service 2.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Service 3
                  </Typography>
                  <Typography variant="body2" component="p">
                    Description of service 3.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;
