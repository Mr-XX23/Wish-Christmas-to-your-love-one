'use client'

import { useState } from 'react';
import { ThemePicker } from '@/components/features/theme-picker';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { createCardAction } from '@/app/actions';
import { Sparkles, Copy, Share2, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function CreateCardForm() {
  const [theme, setTheme] = useState('classic');
  const [loading, setLoading] = useState(false);
  const [generatedSlug, setGeneratedSlug] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    
    const formData = new FormData(event.currentTarget);
    formData.append('theme', theme);
    
    try {
      const result = await createCardAction(formData);
      if (result.success) {
        setGeneratedSlug(result.slug);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareUrl = generatedSlug ? `${window.location.origin}/${generatedSlug}` : '';

  if (generatedSlug) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-xl mx-auto"
      >
        <Card className="border-4 border-red-500 shadow-[0_20px_60px_rgba(220,38,38,0.3)] bg-white dark:bg-slate-50 backdrop-blur-sm">
          <CardHeader className="text-center bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-100 dark:to-pink-100 py-4">
            <div className="mx-auto bg-amber-500 p-4 rounded-full w-fit mb-3">
              <Sparkles className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-serif text-red-700">Card Ready!</CardTitle>
            <CardDescription className="text-slate-700 dark:text-slate-800 text-sm">Your festive greeting has been created.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 pt-4 pb-4">
            <div className="p-3 bg-white border-2 border-slate-300 rounded-md break-all text-center font-mono text-sm text-slate-900">
               {shareUrl}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Button 
                onClick={handleCopy}
                className="w-full border-2 border-slate-400 bg-white hover:bg-slate-400 text-slate-900 hover:text-white font-semibold transition-all shadow-sm"
              >
                <Copy className="mr-2 h-4 w-4" /> {copied ? 'Copied!' : 'Copy'}
              </Button>
              <Button 
                onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(shareUrl)}`, '_blank')} 
                className="w-full bg-green-600 text-white hover:bg-green-700 hover:shadow-lg font-semibold transition-all shadow-sm"
              >
                <Share2 className="mr-2 h-4 w-4" /> WhatsApp
              </Button>
            </div>
          </CardContent>
          <CardFooter className="pt-2">
             <Button variant="ghost" className="w-full text-slate-700 hover:text-white hover:bg-slate-400 font-medium" onClick={() => setGeneratedSlug(null)}>Create Another</Button>
          </CardFooter>
        </Card>
      </motion.div>
    )
  }

  return (
    <Card className="w-full max-w-xl mx-auto border-4 border-red-500 shadow-[0_20px_60px_rgba(220,38,38,0.3)] bg-white dark:bg-slate-50 backdrop-blur-sm">
      <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-100 dark:to-pink-100 py-4">
        <CardTitle className="text-xl font-serif text-center text-red-700">Send a Holiday Wish</CardTitle>
        <CardDescription className="text-center text-slate-700 dark:text-slate-800 text-sm">Create a uniquely animated card for your friends.</CardDescription>
      </CardHeader>
      <CardContent className="pt-3 pb-3">
        <form onSubmit={handleSubmit} className="space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="toName" className="block text-sm font-semibold mb-2 text-slate-800">Friend's Name</label>
                <Input
                  id="toName"
                  name="toName"
                  placeholder="Friend's Name"
                  required
                  className="bg-white border-2 border-slate-300 text-slate-900 placeholder:text-slate-500"
                />
              </div>
              <div>
                <label htmlFor="fromName" className="block text-sm font-semibold mb-2 text-slate-800">Your Name</label>
                <Input
                  id="fromName"
                  name="fromName"
                  placeholder="Your Name"
                  required
                  className="bg-white border-2 border-slate-300 text-slate-900 placeholder:text-slate-500"
                />
              </div>
            </div>
          <div className="space-y-2">
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2 text-slate-800">Your Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Wishing you joy, peace, and love this holiday season!"
                rows={2}
                maxLength={280}
                required
                className="w-full px-3 py-2 bg-white border-2 border-slate-300 rounded-md text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
              />
              <p className="text-xs text-slate-600 mt-1 text-right">Max 280 chars</p>
            </div>
          </div>

          <div className="space-y-2">
            <div>
              <label className="block text-sm font-semibold mb-4 text-slate-800">Choose a Theme</label>
              <ThemePicker currentTheme={theme} onThemeSelect={setTheme} />
            </div>
          </div>

          <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white text-base font-bold h-11 shadow-lg hover:shadow-xl transition-all mt-2" disabled={loading}>
            {loading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Wrapping Gift...</> : <><Sparkles className="mr-2 h-5 w-5" /> Generate Magic Link</>}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
