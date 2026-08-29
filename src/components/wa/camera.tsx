import { useCallback, useEffect, useRef, useState } from "react";
import { Camera, RotateCcw, Upload, Download } from "lucide-react";

export function CameraEasterEgg() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [error, setError] = useState(false);

  const stop = useCallback(() => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
  }, []);

  const start = useCallback(async () => {
    setError(false);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
    } catch {
      setError(true);
    }
  }, []);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  const capture = () => {
    const video = videoRef.current;
    if (!video) return;
    const size = Math.min(video.videoWidth, video.videoHeight);
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.translate(size, 0);
    ctx.scale(-1, 1);
    ctx.drawImage(
      video,
      (video.videoWidth - size) / 2,
      (video.videoHeight - size) / 2,
      size,
      size,
      0,
      0,
      size,
      size,
    );
    setPhoto(canvas.toDataURL("image/jpeg", 0.9));
    stop();
  };

  const retake = () => {
    setPhoto(null);
    start();
  };

  const onUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPhoto(String(reader.result));
    reader.readAsDataURL(file);
    stop();
  };

  return (
    <div className="flex flex-col items-center gap-4 px-4 py-6">
      <p className="text-center text-sm text-foreground/60">
        A tiny easter egg — say hi 👋 and take a polaroid.
      </p>

      {photo ? (
        <div className="animate-wa-pop rounded-sm bg-white p-3 pb-12 shadow-lg">
          <img
            src={photo}
            alt="Your polaroid"
            className="h-56 w-56 object-cover sm:h-64 sm:w-64"
          />
          <p className="-mb-8 mt-3 text-center font-medium text-neutral-500">
            from Jiya&apos;s Portfolio
          </p>
        </div>
      ) : error ? (
        <div className="flex h-56 w-56 flex-col items-center justify-center rounded-2xl bg-foreground/5 text-center sm:h-64 sm:w-64">
          <Camera className="h-7 w-7 text-foreground/40" />
          <p className="mt-2 text-sm font-medium">Camera unavailable</p>
          <p className="mt-1 px-6 text-xs text-foreground/60">
            No permission or no camera found.
          </p>
        </div>
      ) : (
        <video
          ref={videoRef}
          playsInline
          muted
          className="h-56 w-56 scale-x-[-1] rounded-2xl bg-black object-cover sm:h-64 sm:w-64"
        />
      )}

      <div className="flex flex-wrap items-center justify-center gap-2">
        {photo ? (
          <>
            <button
              type="button"
              onClick={retake}
              className="inline-flex items-center gap-1.5 rounded-full border border-wa-green/50 px-4 py-2 text-xs font-medium text-wa-green"
            >
              <RotateCcw className="h-3.5 w-3.5" /> Retake
            </button>
            <a
              href={photo}
              download="jiya-portfolio-polaroid.jpg"
              className="inline-flex items-center gap-1.5 rounded-full bg-wa-green px-4 py-2 text-xs font-medium text-wa-green-foreground"
            >
              <Download className="h-3.5 w-3.5" /> Save
            </a>
          </>
        ) : (
          !error && (
            <button
              type="button"
              onClick={capture}
              className="inline-flex items-center gap-1.5 rounded-full bg-wa-green px-5 py-2.5 text-sm font-medium text-wa-green-foreground"
            >
              <Camera className="h-4 w-4" /> Take photo
            </button>
          )
        )}
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 px-4 py-2 text-xs font-medium text-foreground/70"
        >
          <Upload className="h-3.5 w-3.5" /> Upload a photo instead
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={onUpload}
        />
      </div>
    </div>
  );
}
