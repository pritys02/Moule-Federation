import accc from "@ui5/webcomponents-icons/dist/accessibility.js";
import {
	FlexBox,
	FlexBoxAlignItems,
	FlexBoxDirection,
	FlexBoxJustifyContent,
	Label,
} from "@ui5/webcomponents-react";
import { lazy, Suspense, useState } from "react";

import sideItems from "./lib/data";
import ErrorBoundary from "./components/ErrorBoundary";
import "@ui5/webcomponents/dist/Assets.js";
import "@ui5/webcomponents-fiori/dist/Assets.js";
import "@ui5/webcomponents-react/dist/Assets.js";
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import companyLogo from "./images/irm.png";
import userImage from "./images/userImages/user2.jpg";

const DateTimePickerCard = lazy(() => import("ui5Remote/DateTimePickerCard"));
const CustomComponent = lazy(() => import("ui5Remote/CustomComponent"));
const CustomSideNav = lazy(() => import("ui5Remote/SideNavbar"));
const AppShellBar = lazy(() => import("ui5Remote/AppShell"));

function App() {
	const [isCollapsed, setIsCollapse] = useState(false);
	console.log(isCollapsed);
	return (
		<>
			<ErrorBoundary
				fallback={
					<div className="text-red-600 text-xl font-semibold">
						Failed to load App Shell Bar
					</div>
				}>
				<Suspense fallback={<div>Loading...</div>}>
					<AppShellBar
						companyName="TRP Global"
						productName="iRM 2.0"
						isNotifiction={true}
						notificationCount="500"
						companyLogo={companyLogo}
						userImage={userImage}
						userName="Jane Doe"
						callback={setIsCollapse}
					/>
				</Suspense>
			</ErrorBoundary>

			<FlexBox
				direction={FlexBoxDirection.Column}
				justifyContent={FlexBoxJustifyContent.Center}
				alignItems={FlexBoxAlignItems.Center}>
				<Label>Select Date-time</Label>
				<ErrorBoundary
					fallback={
						<div className="text-red-600 text-xl font-semibold">
							Failed to load Date Time Picker
						</div>
					}>
					<Suspense fallback={<div>Loading...</div>}>
						<DateTimePickerCard />
					</Suspense>
				</ErrorBoundary>

				<ErrorBoundary
					fallback={
						<div className="text-red-600 text-xl font-semibold">
							Failded to load Button
						</div>
					}>
					<Suspense fallback={<div>Loading...</div>}>
						<CustomComponent
							icon={accc}
							cssStyles={
								"text-black bg-blue-600 active:outline-none active:border-none p-2 rounded-md mt-4 hover:bg-blue-400 scale-100 hover:outline-none hover:border-none border-none hover:text-white scale-105 transition-all duration-300 ease-in-out"
							}
						/>
					</Suspense>
				</ErrorBoundary>
				<ErrorBoundary
					fallback={
						<div className="text-red-600 text-xl font-semibold">
							Failed to load Side Navigation Bar
						</div>
					}>
					<Suspense fallback={<div>Loading...</div>}>
						<CustomSideNav items={sideItems} />
					</Suspense>
				</ErrorBoundary>
			</FlexBox>
		</>
	);
}

export default App;
