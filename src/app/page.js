export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="bg-[crimson] text-white p-4 shadow-md">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <img src="/Logo Red ENGRU.jpg" alt="Faculty Logo" className="h-16 w-16 object-contain" />
          <div>
            <h1 className="text-2xl font-bold">Faculty of Engineering, Ramkhamhaeng University</h1>
            <p className="text-sm">Student Registration Guidance Portal</p>
          </div>
        </div>
      </header>

      <section className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <img
            src="/ENG-Building.jpg"
            alt="Engineering Building"
            className="rounded-xl mx-auto shadow-lg max-h-96 object-cover"
          />
          <h2 className="text-3xl font-semibold mt-6 text-[crimson]">Welcome, Lecturers</h2>
          <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
            This portal provides tools to guide student course registration, review grades, check prerequisites,
            and prevent registration mistakes.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-8 px-4 grid md:grid-cols-3 gap-6">
        <div className="bg-white border rounded-xl shadow p-6 hover:shadow-lg">
          <h3 className="text-xl font-bold text-[crimson]">Search Student</h3>
          <p className="text-sm text-gray-600 mt-2">Find student profiles by ID, name or major.</p>
        </div>

        <div className="bg-white border rounded-xl shadow p-6 hover:shadow-lg">
          <h3 className="text-xl font-bold text-[crimson]">Check Prerequisites</h3>
          <p className="text-sm text-gray-600 mt-2">Verify course prerequisites before allowing registration.</p>
        </div>

        <div className="bg-white border rounded-xl shadow p-6 hover:shadow-lg">
          <h3 className="text-xl font-bold text-[crimson]">Approve Forms</h3>
          <p className="text-sm text-gray-600 mt-2">View, comment, and approve registration forms easily.</p>
        </div>
      </section>

      <footer className="bg-[crimson] text-white py-4 text-center text-sm">
        Faculty of Engineering, Ramkhamhaeng University — All Rights Reserved
      </footer>
    </main>
  );
}

