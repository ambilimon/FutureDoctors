import { useState } from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSupabase } from '@/hooks/useSupabase';
import { LockKeyhole, Mail, User, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const authSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type AuthFormValues = z.infer<typeof authSchema>;

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, signUp } = useSupabase();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const form = useForm<AuthFormValues>({
    resolver: zodResolver(authSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSignIn = async (values: AuthFormValues) => {
    setIsLoading(true);
    try {
      // Add hardcoded admin credentials for development/fallback
      if (values.email === 'admin@gmail.com' && values.password === 'admin@123') {
        // Simulate a successful login
        toast({
          title: "Sign in successful",
          description: "Welcome, Admin!",
        });
        
        // Store a dummy token in local storage to simulate authenticated state
        localStorage.setItem('supabase.auth.token', JSON.stringify({
          access_token: 'admin-fallback-token',
          expires_at: Date.now() + 24 * 60 * 60 * 1000, // 24 hours from now
          user: {
            id: 'admin-user',
            email: 'admin@gmail.com',
            role: 'admin',
            app_metadata: {
              provider: 'email'
            },
            user_metadata: {
              name: 'Admin User'
            }
          }
        }));
        
        // Navigate to dashboard
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
        
        return;
      }
      
      // If not using hardcoded credentials, try normal sign in
      try {
        await signIn(values.email, values.password);
      } catch (error: any) {
        console.error('Error signing in:', error);
        toast({
          title: "Sign in failed",
          description: error.message || "Network error. Please try again or use the admin account.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  const onSignUp = async (values: AuthFormValues) => {
    setIsLoading(true);
    try {
      // If trying to sign up with admin credentials, show a special message
      if (values.email === 'admin@gmail.com') {
        toast({
          title: "Registration not allowed",
          description: "This email is reserved for administrative use.",
          variant: "destructive",
        });
        return;
      }
      
      try {
        await signUp(values.email, values.password);
      } catch (error: any) {
        console.error('Error signing up:', error);
        toast({
          title: "Sign up failed",
          description: error.message || "Network error. Please try again later or use the admin account.",
          variant: "destructive",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)]">
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-6 p-4">
        {/* Left column - Welcome message */}
        <div className="hidden md:flex flex-col justify-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-700">
              Access Your Dashboard
            </h1>
            <p className="text-xl text-gray-600">
              Welcome to the admin portal for MBBS Abroad Journey.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <User className="h-5 w-5 text-blue-700" />
                </div>
                <p className="text-gray-600">Manage university information</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <ShieldCheck className="h-5 w-5 text-blue-700" />
                </div>
                <p className="text-gray-600">Secure admin access</p>
              </div>
            </div>
            {/* Add demo credentials notice */}
            <div className="mt-8 p-3 bg-blue-50 border border-blue-100 rounded-md">
              <p className="text-sm text-blue-700 font-medium">Demo Credentials</p>
              <p className="text-sm text-gray-600 mt-1">Email: admin@gmail.com</p>
              <p className="text-sm text-gray-600">Password: admin@123</p>
            </div>
          </div>
        </div>

        {/* Right column - Auth form */}
        <Card className="w-full shadow-lg border-blue-100">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-100">
            <CardTitle className="text-2xl text-center text-blue-700">Welcome Back</CardTitle>
            <CardDescription className="text-center">
              Sign in to access your dashboard or create a new account
            </CardDescription>
          </CardHeader>
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            
            <Form {...form}>
              <TabsContent value="signin">
                <form onSubmit={form.handleSubmit(onSignIn)} className="space-y-4 p-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <FormControl>
                            <Input placeholder="Enter your email" type="email" className="pl-10" {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <div className="relative">
                          <LockKeyhole className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <FormControl>
                            <Input placeholder="Enter your password" type="password" className="pl-10" {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign In"}
                  </Button>
                  
                  {/* Demo credentials for mobile */}
                  <div className="mt-4 p-3 bg-blue-50 border border-blue-100 rounded-md md:hidden">
                    <p className="text-sm text-blue-700 font-medium">Demo Credentials</p>
                    <p className="text-sm text-gray-600 mt-1">Email: admin@gmail.com</p>
                    <p className="text-sm text-gray-600">Password: admin@123</p>
                  </div>
                </form>
              </TabsContent>
              
              <TabsContent value="signup">
                <form onSubmit={form.handleSubmit(onSignUp)} className="space-y-4 p-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <FormControl>
                            <Input placeholder="Enter your email" type="email" className="pl-10" {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <div className="relative">
                          <LockKeyhole className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <FormControl>
                            <Input placeholder="Create a password" type="password" className="pl-10" {...field} />
                          </FormControl>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700" 
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing up..." : "Sign Up"}
                  </Button>
                  
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-100 rounded-md">
                    <p className="text-sm text-yellow-700">
                      Note: Registration is currently having issues with our backend. 
                      Please use the admin credentials to access the dashboard for now.
                    </p>
                  </div>
                </form>
              </TabsContent>
            </Form>
            
            <CardFooter className="flex justify-center p-6 bg-gray-50 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                By signing in, you agree to our Terms of Service and Privacy Policy.
              </p>
            </CardFooter>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
