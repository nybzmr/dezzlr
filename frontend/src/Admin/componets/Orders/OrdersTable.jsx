import React, { useState } from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  Menu,
  MenuItem,
  Pagination,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const OrdersTable = () => {
  const [formData, setFormData] = useState({ status: "", sort: "" });
  const [anchorElArray, setAnchorElArray] = useState([]);

  // Static data for orders
  const orders = [
    {
      _id: "1",
      orderItems: [
        { _id: "item1", product: { imageUrl: "/path/to/image.jpg", title: "Product 1", brand: "Brand A" } },
        { _id: "item2", product: { imageUrl: "/path/to/image.jpg", title: "Product 2", brand: "Brand B" } }
      ],
      totalPrice: "$100",
      orderStatus: "PENDING",
    },
    // Add more orders as needed
  ];

  const handleUpdateStatusMenuClick = (event, index) => {
    const newAnchorElArray = [...anchorElArray];
    newAnchorElArray[index] = event.currentTarget;
    setAnchorElArray(newAnchorElArray);
  };

  const handleUpdateStatusMenuClose = (index) => {
    const newAnchorElArray = [...anchorElArray];
    newAnchorElArray[index] = null;
    setAnchorElArray(newAnchorElArray);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaginationChange = (event, value) => {
    console.log("Current page:", value);
    // Implement pagination logic here
  };

  const handleOrderAction = (orderId, actionType, index) => {
    handleUpdateStatusMenuClose(index);
    console.log(`Action: ${actionType} for Order ID: ${orderId}`);
  };

  return (
    <Box>
      <Card className="p-3">
        <CardHeader
          title="Filter & Sort"
          sx={{ pt: 0, alignItems: "center", "& .MuiCardHeader-action": { mt: 0.6 } }}
        />
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="status-select-label">Status</InputLabel>
              <Select
                labelId="status-select-label"
                id="status-select"
                name="status"
                value={formData.status}
                label="Status"
                onChange={handleChange}
              >
                <MenuItem value="PLACED">PLACED</MenuItem>
                <MenuItem value="CONFIRMED">CONFIRMED</MenuItem>
                <MenuItem value="DELIVERED">DELIVERED</MenuItem>
                <MenuItem value="CANCELLED">CANCELLED</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <FormControl fullWidth>
              <InputLabel id="sort-select-label">Sort By</InputLabel>
              <Select
                labelId="sort-select-label"
                id="sort-select"
                name="sort"
                value={formData.sort}
                label="Sort By"
                onChange={handleChange}
              >
                <MenuItem value="Newest">Newest</MenuItem>
                <MenuItem value="Older">Older</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Card>
      <Card className="mt-2">
        <CardHeader
          title="All Orders"
          sx={{ pt: 2, alignItems: "center", "& .MuiCardHeader-action": { mt: 0.6 } }}
        />
        <TableContainer>
          <Table sx={{ minWidth: 800 }} aria-label="orders table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Id</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Status</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Update</TableCell>
                <TableCell sx={{ textAlign: "center" }}>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((item, index) => (
                <TableRow
                  hover
                  key={item._id}
                  sx={{ "&:last-of-type td, &:last-of-type th": { border: 0 } }}
                >
                  <TableCell>
                    <AvatarGroup max={4} sx={{ justifyContent: 'start' }}>
                      {item.orderItems.map((orderItem) => (
                        <Avatar key={orderItem._id} alt={orderItem.product.title} src={orderItem.product.imageUrl} />
                      ))}
                    </AvatarGroup>
                  </TableCell>
                  <TableCell sx={{ py: (theme) => `${theme.spacing(0.5)} !important` }}>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography sx={{ fontWeight: 500, fontSize: "0.875rem !important" }}>
                        {item.orderItems.map((order) => (
                          <span key={order._id}>{order.product.title},</span>
                        ))}
                      </Typography>
                      <Typography variant="caption">
                        {item.orderItems.map((order) => (
                          <span key={order._id} className="opacity-60">
                            {order.product.brand},
                          </span>
                        ))}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{item.totalPrice}</TableCell>
                  <TableCell>{item._id}</TableCell>
                  <TableCell className="text-white">
                    <Chip
                      sx={{ color: "white !important", fontWeight: "bold", textAlign: "center" }}
                      label={item.orderStatus}
                      size="small"
                      color={
                        item.orderStatus === "PENDING"
                          ? "info"
                          : item.orderStatus === "DELIVERED"
                          ? "success"
                          : "secondary"
                      }
                      className="text-white"
                    />
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }} className="text-white">
                    <Button
                      id={`status-button-${item._id}`}
                      aria-controls={`status-menu-${item._id}`}
                      aria-haspopup="true"
                      aria-expanded={Boolean(anchorElArray[index])}
                      onClick={(event) => handleUpdateStatusMenuClick(event, index)}
                    >
                      Status
                    </Button>
                    <Menu
                      id={`status-menu-${item._id}`}
                      anchorEl={anchorElArray[index]}
                      open={Boolean(anchorElArray[index])}
                      onClose={() => handleUpdateStatusMenuClose(index)}
                      MenuListProps={{ "aria-labelledby": `status-button-${item._id}` }}
                    >
                      <MenuItem
                        onClick={() => handleOrderAction(item._id, 'confirm', index)}
                        disabled={["DELIVERED", "SHIPPED", "CONFIRMED"].includes(item.orderStatus)}
                      >
                        CONFIRMED ORDER
                      </MenuItem>
                      <MenuItem
                        onClick={() => handleOrderAction(item._id, 'ship', index)}
                        disabled={["DELIVERED", "SHIPPED"].includes(item.orderStatus)}
                      >
                        SHIPPED ORDER
                      </MenuItem>
                      <MenuItem
                        onClick={() => handleOrderAction(item._id, 'deliver')}
                        disabled={item.orderStatus === "DELIVERED"}
                      >
                        DELIVERED ORDER
                      </MenuItem>
                    </Menu>
                  </TableCell>
                  <TableCell sx={{ textAlign: "center" }} className="text-white">
                    <Button
                      onClick={() => handleOrderAction(item._id, 'delete')}
                      variant="text"
                    >
                      delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Card className="mt-2 flex justify-center items-center">
        <Pagination
          className="py-5 w-auto"
          size="large"
          count={10} // Replace with actual page count
          color="primary"
          onChange={handlePaginationChange}
        />
      </Card>
    </Box>
  );
};

export default OrdersTable;
