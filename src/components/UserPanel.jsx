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
const UserPanelNav = ({ toggleDrawer }) => (
	<Box
		sx={{ width: 250 }}
		role="presentation"
		onClick={toggleDrawer(false)}
		onKeyDown={toggleDrawer(false)}
	>
		<List>
			{navItems.map((item) => (
				<ListItem button component={Link} to={item.path} key={item.text}>
					<ListItemText primary={item.text} />
				</ListItem>
			))}
		</List>
	</Box>
);

const UserPanel = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [selectedSection, setSelectedSection] = React.useState("Dashboard");

	const handleListItemClick = (section) => {
		setSelectedSection(section);
	};

	const toggleDrawer = (open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}
		setDrawerOpen(open);
	};

	return (
		<div className="user-panel">
			<AppBar position="static">
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={toggleDrawer(true)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" style={{ flexGrow: 1 }}>
						User Panel
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer open={drawerOpen} onClose={toggleDrawer(false)}>
				<UserPanelNav toggleDrawer={toggleDrawer} />
			</Drawer>
			<div className="content">
				<Box sx={{ display: "flex" }}>
					<CssBaseline />
					<AppBar
						position="fixed"
						sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
					>
						<Toolbar>
							<Typography variant="h6" noWrap component="div">
								User Panel
							</Typography>
						</Toolbar>
					</AppBar>
					<Drawer
						variant="permanent"
						sx={{
							width: drawerWidth,
							flexShrink: 0,
							[`& .MuiDrawer-paper`]: {
								width: drawerWidth,
								boxSizing: "border-box",
							},
						}}
					>
						<Toolbar />
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
			</div>
		</div>
	);
};

export default UserPanel;
