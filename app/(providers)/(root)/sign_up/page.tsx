import React from "react";

function SignUpPage() {
  const handleClickSignUp = 1;
  return (
    <main className="px-5 lg:px-8 lg:py-10 flex flex-col grow w-full items-stretch mx-auto max-w-screen-lg">
      <h2 className="text-3xl font-bold text-center my-16">회원가입</h2>
      <section className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full">
        <div className="grid gap-y-2 w-full">
          <label className="text-sm font-medium">이메일</label>
          <input
            type="email"
            className="block border w-full px-6 py-3 rounded outline-none transition border-slate-300 focus:border-black"
          />
        </div>
        <div className="grid gap-y-2 w-full">
          <label className="text-sm font-medium">비밀번호</label>
          <input
            type="password"
            className="block border w-full px-6 py-3 rounded outline-none transition border-slate-300 focus:border-black"
          />
        </div>
        <div className="grid gap-y-2 w-full">
          <label className="text-sm font-medium">비밀번호 확인</label>
          <input
            type="password-check"
            className="block border w-full px-6 py-3 rounded outline-none transition border-slate-300 focus:border-black"
          />
        </div>
        <div className="mt-2 w-full">
          <button
            // onClick={handleClickSignUp}
            className="border py-4 px-3 border-slate-700 text-[15px] font-bold bg-black text-white w-full"
          >
            회원가입하기
          </button>
        </div>
      </section>
    </main>
  );
}

export default SignUpPage;
