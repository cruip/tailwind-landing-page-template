import Image from "next/image";
import PlanetImg from "@/public/images/car.webp";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";

export default function FeaturesPlanet() {
	return (
		<section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900" id="about">
			<div className="mx-auto max-w-6xl px-4 sm:px-6">
				<div className="py-12 md:py-20">
					{/* Section header */}
					<div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
						<h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
							​Về chúng tôi
						</h2>
						<p className="text-white">
							​Tự hào là nhà xuất nhập khẩu Đông Á tốt nhất CÔNG TY CỔ PHẦN TM
							DỊCH VỤ VẬN TẢI XUẤT NHẬP KHẨU ĐÔNG Á là một công ty chuyên về
							kinh doanh xuất nhập khẩu và gia công cơ khí. Chúng tôi cung cấp
							các dịch vụ chuyên nghiệp về vận tải hàng hóa xuất nhập khẩu, đảm
							bảo an toàn và đúng hạn của hàng hóa trong quá trình vận chuyển.
							Chúng tôi cũng tự hào là một trong những nhà cung cấp dịch vụ gia
							công cơ khí chuyên nghiệp và uy tín trong khu vực. Với đội ngũ
							nhân viên chuyên nghiệp và kinh nghiệm, chúng tôi luôn đảm bảo sẽ
							cung cấp cho khách hàng dịch vụ tốt nhất.
						</p>
					</div>
					{/* Planet */}
					<div className="pb-16 md:pb-20" data-aos="zoom-y-out">
						<div className="text-center">
							<div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.500),transparent)]">
								<Image src={PlanetImg} width={400} height={400} alt="Planet" />
							</div>
						</div>
					</div>
					{/* Grid */}
					<div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
						<article>
							<h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
								<svg
									className="fill-blue-500"
									xmlns="http://www.w3.org/2000/svg"
									width={16}
									height={16}
								>
									<path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
								</svg>
								<span>Kinh doanh xuất nhập khẩu</span>
							</h3>
							<p className="text-[15px] text-gray-400">
								Chuyên gia trong lĩnh vực
							</p>
						</article>
						<article>
							<h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
								<svg
									className="fill-blue-500"
									xmlns="http://www.w3.org/2000/svg"
									width={16}
									height={16}
								>
									<path d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z" />
								</svg>
								<span>Gia công cơ khí</span>
							</h3>
							<p className="text-[15px] text-gray-400">
								Chuyên gia trong lĩnh vực
							</p>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
}
