import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-black text-white">
          <nav className="flex justify-between items-center p-6 border-b border-gray-800 bg-gray-900/50">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              learn_with_Ai
            </h1>
            <div>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">Sign In</button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>
          </nav>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
