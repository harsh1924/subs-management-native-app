import { Redirect } from "expo-router";

export default function Index() {
  const isLoggedIn = true; // replace with your auth logic

  if (!isLoggedIn) {
    return <Redirect href="/sign-in" />;
  }

  return <Redirect href="/(tabs)" />;
}