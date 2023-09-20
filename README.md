
![Create-Next-App (1)](https://github.com/vanyadev/next-gh/assets/136343358/c05a684a-1dff-4785-b1c3-f4c5019e1580)

**What is done:**
✅ Developed a responsive webpage that functions as a GitHub clone using the GitHub API. The webpage allows users to interact with GitHub data by fetching information from the API, searching for specific users, and providing error messages in case of issues. Additionally, users can paginate through a user's repositories. For mobile screens, there is a burger menu similar to the original GitHub interface, and an interesting feature is the smooth slider in the sidebar menu.

**To clone and test the repository, follow these steps:**
  1. Clone repo
```
git clone https://github.com/vanyadev/next-gh.git
```
  2. Go to folder next-gh
```
cd next-gh
```
  3. Install dependencies
```
npm i 
```
  4. Start dev server
```
npm run dev
```
Regarding some challenges I encountered during the development process:

I faced difficulties while setting up testing libraries, such as Jest, for Next.js version 13. Due to these issues, I decided to postpone the testing phase for now. Occasionally, I encountered errors with the GitHub API. Specifically, I received a 401 error, indicating an authentication token problem. Strangely, the same token worked correctly in other parts of the application.
