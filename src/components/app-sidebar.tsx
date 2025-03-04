import {
	GalleryVerticalEnd,
	LayoutDashboard,
	FolderClosed,
} from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

// Menu items.
const items = [
	{
		title: "Dashboard",
		url: "/dashboard",
		icon: LayoutDashboard,
	},
	{
		title: "Module",
		url: "/dashboard/module",
		icon: FolderClosed,
	},
	{
		title: "Lecture",
		url: "/dashboard/lecture",
		icon: GalleryVerticalEnd,
	},
];

export function AppSidebar() {
	return (
		<Sidebar key={"Modal"}>
			<SidebarHeader>
				<Link href={"/"} className="w-full text-center">
					LMS
				</Link>
			</SidebarHeader>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<Link href={item.url}>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
