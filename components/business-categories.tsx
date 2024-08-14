import Image from "next/image";
import Logo01 from "@/public/images/logo-01.svg";
import Logo02 from "@/public/images/logo-02.svg";
import Logo03 from "@/public/images/logo-03.svg";
import Logo04 from "@/public/images/logo-04.svg";
import Logo05 from "@/public/images/logo-05.svg";
import Logo06 from "@/public/images/logo-06.svg";
import Logo07 from "@/public/images/logo-07.svg";
import Logo08 from "@/public/images/logo-08.svg";
import Logo09 from "@/public/images/logo-09.svg";
import {companies} from "@/app/lib/data"
import CompanyBar from "@/components/company-bar"

export default function BusinessCategories() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl py-10 text-center md:pb-15">
          <h2 className="text-3xl font-bold md:text-4xl">
            Work Experience
          </h2>
        </div>
        <CompanyBar />
        
      </div>
    </section>
  );
}
