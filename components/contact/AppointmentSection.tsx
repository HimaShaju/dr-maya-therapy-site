"use client";

export default function AppointmentSection() {
  return (
    <section className="bg-[#DADEE1] py-28">
      <div className="mx-auto max-w-7xl px-6 text-center text-[#447F98]">
        <h2 className="fade-up delay-200 text-[56px] font-semibold leading-[1.05] sm:text-[72px]">
          Book an appointment.
        </h2>

        <p className="fade-up delay-300 mx-auto mt-10 max-w-4xl text-[17px] leading-8 text-[#447F98]/90">
          Add some text here if you like, and add your scheduling widget below
          (you can get one by signing up for a scheduling account through
          Squarespace, the top-tier plan is HIPAA compliant OR you can use your
          client portal).
        </p>

        {/* Widget Placeholder */}
        <div className="fade-up delay-400 mx-auto mt-24 flex max-w-xl flex-col items-center justify-center bg-white px-10 py-16 shadow-sm">
          <h3 className="text-lg font-semibold text-[#447F98]">
            This page is not active
          </h3>
          <p className="mt-3 text-sm text-[#447F98]/80">
            If you're the owner, please log into your account to start a free
            trial or subscribe.
          </p>

          <a
            href="https://login.squarespace.com/api/1/login/oauth/provider/authorize?client_id=aHW16IlRwTPNctfSvoofuCarXfdJDvJK&state=b3ZONHJ5K0pzVWlnNHZXelFheGZGckFrc2wyZldGc3NTQWszcTFSZG5WVT06eyJ1IjowLCJ4IjoxNzcwMjYzMjI3LCJuIjoiNmUzN2E2NGQifQ%3D%3D&redirect_uri=https%3A%2F%2Fsecure.acuityscheduling.com%2Foauth2%2Fsquarespace-standalone%2Fcallback&access_type=offline#/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center justify-center bg-[#447F98] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:opacity-90"
          >
            GO TO ACCOUNT
          </a>

          <a
            href="https://www.acuityscheduling.com/?utm_campaign=acuity&utm_medium=referral&utm_source=scheduling"
            target="_blank"
            rel="noreferrer"
            className="mt-16 text-sm text-[#447F98]/80 hover:underline"
          >
            Powered by <span className="font-semibold">acuity:scheduling</span>
          </a>
        </div>
      </div>
    </section>
  );
}
