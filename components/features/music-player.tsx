"use client"

import * as React from "react"
import { Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = React.useState(true)
  const audioRef = React.useRef<HTMLAudioElement | null>(null)

  // Initialize audio volume and auto-play
  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3
      audioRef.current.play().catch((error) => {
        console.log("Auto-play prevented:", error)
        setIsPlaying(false)
      })
    }
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error)
      })
      setIsPlaying(true)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <audio
        ref={audioRef}
        loop
        src="/jingle-bells.mp3"
      />
      
      <Button
        variant="outline"
        size="icon"
        className={cn(
          "rounded-full h-14 w-14 shadow-xl border-4 transition-all duration-300",
          isPlaying 
            ? "border-red-500 bg-white text-red-600 hover:bg-red-50 animate-pulse" 
            : "border-red-300 bg-white/90 text-red-400 hover:bg-white hover:border-red-400"
        )}
        onClick={togglePlay}
        title={isPlaying ? "Pause Jingle Bells 🔔" : "Play Jingle Bells 🎵"}
      >
        {isPlaying ? (
          <Volume2 className="h-6 w-6" />
        ) : (
          <VolumeX className="h-6 w-6" />
        )}
      </Button>
    </div>
  )
}
