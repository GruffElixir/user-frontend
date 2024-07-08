import React, { useState } from "react";
import {
	Drawer,
	Box,
	List,
	ListItem,
	ListItemText,
	IconButton,
	AppBar,
	Toolbar,
	Typography,
	CssBaseline,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Dashboard from "./Dashboard";
import ChangePassword from "./ChangePassword";
import IssuedBooks from "./IssuedBooks";
import SubmitBookRequest from "./SubmitBookRequest";
import ArchivedBooks from "./ArchivedBooks";

const drawerWidth = 240;

const UserPanel = () => {
	const [drawerOpen, setDrawerOpen] = useState("false");
	const [selectedSection, setSelectedSection] = useState("Dashboard");

	const handleListItemClick = (section) => {
		setSelectedSection(section);
	};

	const toggleDrawer = (open) => () => {
		setDrawerOpen(open);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
			>
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={toggleDrawer(true)}
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Student Portal
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				anchor="left"
				open={drawerOpen}
				onClose={toggleDrawer(false)}
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						width: drawerWidth,
						boxSizing: "border-box",
						top: 64, 
					},
				}}
			>
				<Box sx={{ overflow: "auto" }}>
					<List>
						{[
							"Dashboard",
							"Change Password",
							"View Issued Books",
							"View All Archive Books",
							"Submit Book Request",
							"About Software",
						].map((text) => (
							<ListItem
								button
								key={text}
								onClick={() => handleListItemClick(text)}
							>
								<ListItemText primary={text} />
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
			<Box
				component="main"
				sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
			>
				<Toolbar />
				{selectedSection === "Dashboard" && <Dashboard />}
				{selectedSection === "Change Password" && <ChangePassword />}
				{selectedSection === "View Issued Books" && <IssuedBooks />}
				{selectedSection === "View All Archive Books" && <ArchivedBooks />}
				{selectedSection === "Submit Book Request" && <SubmitBookRequest />}
				{selectedSection === "About Software" && (
					<div>About Software Section</div>
				)}
			</Box>
		</Box>
	);
};

export default UserPanel;
