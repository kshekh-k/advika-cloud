import { Plus } from "lucide-react";

export default function Faqs() {
  return (
    <div className="container">
      {/* FAQs */}
      <h2 className="text-6xl font-semibold text-primary text-center">
        Frequently Asked Queries
      </h2>

      <div className="mt-16 max-w-5xl mx-auto">
        <ul>
          <li className="py-8 px-10 border rounded-xl bg-white mb-11">
            <div className="flex items-center justify-between gap-8">
              <h3 className="text-2xl font-semibold text-black/60">
                01. Why is Cloudminister a reliable cloud web hosting company?
              </h3>
              <Plus strokeWidth={2.5} />
            </div>
            <p className="text-black/60 leading-loose mt-6">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
              quidem tenetur facere? Quam ipsum similique nisi deleniti adipisci
              autem! Deserunt. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Distinctio soluta molestias natus recusandae
              possimus consequuntur modi, saepe laboriosam aliquam pariatur
              aliquid ut libero. Explicabo fuga illo tempore laborum inventore
              rerum.
            </p>
          </li>
          <li className="py-11 px-10 border-b">
            <div className="flex items-center justify-between gap-8">
              <h3 className="text-2xl font-semibold text-black/60">
                02. Why is Cloudminister a reliable cloud web hosting company?
              </h3>
              <Plus strokeWidth={2.5} />
            </div>
          </li>
          <li className="py-11 px-10">
            <div className="flex items-center justify-between gap-8">
              <h3 className="text-2xl font-semibold text-black/60">
                03. Why is Cloudminister a reliable cloud web hosting company?
              </h3>
              <Plus strokeWidth={2.5} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
