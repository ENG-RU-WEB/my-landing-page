export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-white px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-700 mb-4">
        ระบบลงทะเบียนนักศึกษา
      </h1>
      <p className="text-gray-700 text-lg md:text-xl max-w-2xl mb-6">
        ระบบช่วยอาจารย์ตรวจสอบการลงทะเบียนของนักศึกษา แจ้งเตือนวิชาที่ไม่ผ่านเงื่อนไข
        พร้อมระบบยืนยันการอนุมัติแบบง่าย
      </p>
      <a href="/login">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 transition-all">
          เข้าสู่ระบบ
        </button>
      </a>
    </main>
  );
}
