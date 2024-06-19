import { includeUser } from "./components/include-user";
import { logProps } from "./components/log-props";
import { UserInfoForm } from "./components/user-form";
import { UserInfo } from "./components/user-info";


// const UsertInfoWrapper = logProps(UserInfo);

const UserInfoWithLoader = includeUser(UserInfo, "3");

function App() {
  return (
    <>
      {/* <UsertInfoWrapper tst={"test"} b={"I am be"} c={22} /> */}

      <UserInfoWithLoader/>

      <UserInfoForm/>
    </>
  );
}

export default App;
