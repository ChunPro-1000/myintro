import Image from "next/image";

export default function Home() {
  // Tech Skill 뱃지 색상 매핑
  const skillColors: Record<string, { bg: string; text: string; border: string }> = {
    JS: {
      bg: "bg-gradient-to-br from-yellow-400 to-yellow-600",
      text: "text-yellow-900",
      border: "border-yellow-500",
    },
    TS: {
      bg: "bg-gradient-to-br from-blue-500 to-blue-700",
      text: "text-blue-50",
      border: "border-blue-400",
    },
    React: {
      bg: "bg-gradient-to-br from-cyan-400 to-cyan-600",
      text: "text-cyan-900",
      border: "border-cyan-500",
    },
    Tailwindcss: {
      bg: "bg-gradient-to-br from-teal-400 to-teal-600",
      text: "text-teal-900",
      border: "border-teal-500",
    },
    Premierepro: {
      bg: "bg-gradient-to-br from-purple-400 to-purple-600",
      text: "text-purple-50",
      border: "border-purple-400",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-blue-900">
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Profile Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-white to-pink-50 dark:from-gray-800 dark:to-purple-900 rounded-2xl p-8 shadow-xl border border-pink-200 dark:border-purple-700">
            <div className="flex items-start gap-8 flex-wrap">
              {/* 프로필 사진 */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 flex items-center justify-center border-4 border-white dark:border-gray-700 shadow-lg overflow-hidden relative">
                  <div className="absolute inset-0">
                    <Image
                      src="/profile.jpg"
                      alt="프로필 사진"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <span className="relative z-10 text-white font-semibold text-sm md:text-base opacity-0 hover:opacity-100 transition-opacity">
                    사진
                  </span>
                </div>
              </div>

              {/* 프로필 정보 */}
              <div className="flex-1 min-w-[300px]">
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 dark:from-pink-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Profile: Title
                </h2>
                
                <div className="space-y-6">
                  {/* I AM 섹션 */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-4 rounded-xl border-l-4 border-blue-500">
                    <h3 className="text-lg font-semibold mb-3 text-blue-700 dark:text-blue-300">
                      _I AM
                    </h3>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p className="font-medium">이름: <span className="text-blue-600 dark:text-blue-400">천프로</span></p>
                      <p className="font-medium">포지션: <span className="text-blue-600 dark:text-blue-400">PM 서비스 기획 / FE Developer(jr)</span></p>
                    </div>
                  </div>

                  {/* Contact 섹션 */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-4 rounded-xl border-l-4 border-purple-500">
                    <h3 className="text-lg font-semibold mb-3 text-purple-700 dark:text-purple-300">
                      _Contact
                    </h3>
                    <div className="space-y-2 text-gray-700 dark:text-gray-300">
                      <p className="font-medium">Email: <span className="text-purple-600 dark:text-purple-400">leepro@naver.com</span></p>
                      <p className="font-medium">Phone: <span className="text-purple-600 dark:text-purple-400">+082 - 1234-5678</span></p>
                    </div>
                  </div>

                  {/* Channel 섹션 */}
                  <div className="bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-900/30 dark:to-green-900/30 p-4 rounded-xl border-l-4 border-teal-500">
                    <h3 className="text-lg font-semibold mb-3 text-teal-700 dark:text-teal-300">
                      _Channel
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm mb-1 font-medium text-gray-700 dark:text-gray-300">
                          SNS:
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border-2 border-teal-300 dark:border-teal-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                          placeholder="SNS 링크를 입력하세요"
                        />
                      </div>
                      <div>
                        <label className="block text-sm mb-1 font-medium text-gray-700 dark:text-gray-300">
                          GitHub:
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 border-2 border-teal-300 dark:border-teal-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                          placeholder="GitHub 링크를 입력하세요"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduce Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Introduce
          </h2>
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/30 dark:via-purple-900/30 dark:to-pink-900/30 border-2 border-indigo-200 dark:border-indigo-700 rounded-2xl p-8 min-h-[200px] shadow-lg">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              간단한 자기소개 및 인삿말
            </p>
          </div>
        </section>

        {/* Tech Skill Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
            Tech Skill
          </h2>
          <div className="flex flex-wrap gap-4">
            {["JS", "TS", "React", "Tailwindcss", "Premierepro"].map((skill) => {
              const colors = skillColors[skill];
              return (
                <div
                  key={skill}
                  className={`${colors.bg} ${colors.text} ${colors.border} px-6 py-3 rounded-full font-bold text-sm md:text-base border-2 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer transform`}
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
