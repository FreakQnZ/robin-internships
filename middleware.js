import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ['/', '/about', '/contact', '/LandingPage', '/StartupHomePage', '/StudentHomePage' ],
  // ignoredRoutes: ['/api/all', '/api/new', '/api/update', '/api/delete'],
  ignoredRoutes: ['/api/verify', '/api/new', '/api/newStartup', '/api/getAboutUs', '/api/getListing','/api/addLor','/api/addResume','/api/addPortfolio','/api/applyForListing','/api/getListingsForStartup', '/api/studentDetails','/api/getStartupImg','/api/getStartupName','/api/getApplied','/api/acceptStudent','/api/rejectStudent','/api/getAcceptedListingsForStudent','/api/getIsActiveListingsForStartup','/api/rejectAcceptedStudent'],
  debug: true,
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
