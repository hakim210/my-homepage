export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        내 홈페이지
      </h1>
      <p className="max-w-md text-lg text-gray-600 dark:text-gray-400">
        아직 아무것도 없습니다. 터미널에서 <code className="rounded bg-gray-100 px-1.5 py-0.5 font-mono text-base dark:bg-gray-800">opencode</code> 를 켜고
        만들고 싶은 것을 말해 보세요.
      </p>
      <p className="text-sm text-gray-400">
        이 문장이 보인다면 배포까지 성공한 것입니다.
      </p>
    </main>
  );
}
