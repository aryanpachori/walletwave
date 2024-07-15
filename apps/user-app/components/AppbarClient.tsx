"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Appbar } from "@repo/ui/appbar";
import { useRouter } from "next/navigation";

export function AppbarClient() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/api/auth/signin"); // Redirect to landing page after sign-out
  };

  return (
    <div>
      <Appbar
        onSignin={signIn}
        onSignout={handleSignOut}
        user={session?.user}
      />
    </div>
  );
}

