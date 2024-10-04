import Link from "next/link";

function Headers() {
  return (
    <header className="bg-white sticky top-0 h-16 border-b flex items-center px-5 lg:px-7 z-10 shrink-0">
      <Link className="text-2xl font-bold text-center" href="/">
        발랑
      </Link>
      <nav className="ml-20">
        <ul>
          <li className="text-[15px] font-medium">
            <Link href="brands">BRANDS</Link>
          </li>
        </ul>
      </nav>
      <div className="ml-auto flex items-center gap-x-4">
        <Link className="text-[15px] text-gray-800 font-medium" href="/sign_up">
          회원가입
        </Link>
        <button className="{'modal-open-btn'} text-[15px] text-gray-800 font-medium">
          로그인
        </button>
      </div>
    </header>
  );
}

export default Headers;
