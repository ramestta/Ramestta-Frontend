import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronRight,
  ChevronLeft,
  ArrowUp,
  HomeIcon,
} from "lucide-react";
import {
  whitepaperData,
  getAdjacentSections,
  getSectionById,
} from "../data/whitepaperData";
import SEO from "../components/SEO";
import ramaLogo from "../assets/rama_logo.png";

const WhitepaperPage: React.FC = () => {
  const { sectionId } = useParams<{ sectionId?: string }>();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [buttonsBottom, setButtonsBottom] = useState(20);
  const footerRef = useRef<HTMLDivElement>(null);

  const currentSection = sectionId
    ? getSectionById(sectionId)
    : whitepaperData[0];
  const { prev, next } = getAdjacentSections(
    currentSection?.id || whitepaperData[0].id
  );

  useEffect(() => {
    if (!sectionId)
      navigate(`/whitepaper/${whitepaperData[0].id}`, { replace: true });
  }, [sectionId, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sectionId]);

  // Scroll listener for floating buttons and scroll-top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      if (!footerRef.current) return;
      const footerTop = footerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const offset = footerTop - windowHeight + 20;
      setButtonsBottom(offset < 20 ? 20 - offset : 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleSectionClick = (id: string) => {
    navigate(`/whitepaper/${id}`);
    setIsSidebarOpen(false);
  };

  const renderContent = (content: string) =>
    content
      .split("\n")
      .map((line, idx) => {
        if (line.startsWith("# "))
          return (
            <h1 key={idx} className="text-4xl font-bold text-white mb-6 mt-8">
              {line.slice(2)}
            </h1>
          );
        if (line.startsWith("## "))
          return (
            <h2
              key={idx}
              className="text-3xl font-bold text-primary-400 mb-4 mt-8"
            >
              {line.slice(3)}
            </h2>
          );
        if (line.startsWith("### "))
          return (
            <h3
              key={idx}
              className="text-2xl font-semibold text-gray-200 mb-3 mt-6"
            >
              {line.slice(4)}
            </h3>
          );
        if (line.startsWith("**") && line.endsWith("**"))
          return (
            <p
              key={idx}
              className="text-lg font-bold text-primary-300 mb-2 mt-4"
            >
              {line.slice(2, -2)}
            </p>
          );
        if (line.startsWith("- "))
          return (
            <li key={idx} className="text-gray-300 mb-2 ml-6">
              {line.slice(2)}
            </li>
          );
        if (
          line.startsWith("✅") ||
          line.startsWith("🚧") ||
          line.startsWith("⏳")
        )
          return (
            <p key={idx} className="text-gray-300 mb-2">
              {line}
            </p>
          );
        if (line.startsWith("```") || line.startsWith("|")) return null;
        if (line.trim() === "") return <br key={idx} />;
        return (
          <p key={idx} className="text-gray-300 leading-relaxed mb-4">
            {line}
          </p>
        );
      })
      .filter(Boolean);

  if (!currentSection)
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        Loading...
      </div>
    );

  return (
    <>
      <SEO
        title={`${currentSection.title} - Ramestta Whitepaper`}
        description={`${currentSection.title} - Comprehensive technical documentation for Ramestta Layer-3 blockchain`}
      />

      <div className="min-h-screen bg-black flex overflow-hidden">
        {/* Overlay when sidebar open (mobile only) */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 xl:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-screen w-80 bg-gray-900 border-r border-gray-800 overflow-y-auto z-50 transform transition-transform duration-300 scrollbar-hide ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } xl:translate-x-0`}
        >
          {/* Sidebar Header */}
          <div className="sticky top-0 bg-black/95 backdrop-blur-md border-b border-gray-800 flex items-center justify-between px-6 py-4">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src={ramaLogo}
                alt="Ramestta Logo"
                className="h-8 object-contain"
              />
              <span className="text-2xl font-ramestta text-white">
                RAMESTTA
              </span>
            </Link>
          </div>

          {/* Sidebar Navigation */}
          <nav className="p-4 pb-8">
            {whitepaperData.map((section) => (
              <button
                key={section.id}
                onClick={() => handleSectionClick(section.id)}
                className={`w-full text-left px-4 py-3 rounded-lg mb-2 transition-all duration-200 ${
                  currentSection.id === section.id
                    ? "bg-primary-500/20 text-primary-400 border border-primary-500/30"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{section.title}</span>
                  {currentSection.id === section.id && (
                    <ChevronRight size={16} className="text-primary-400" />
                  )}
                </div>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 xl:ml-80 flex flex-col">
          {/* ✅ Mobile Top Bar */}
          <div className="xl:hidden fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800 flex items-center justify-between px-3 py-2">
            {/* Left: Menu / Close */}
            <div className="flex items-center">
              <button
                onClick={() => setIsSidebarOpen((prev) => !prev)}
                className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                {isSidebarOpen ? (
                  <X size={24} className="text-gray-200" />
                ) : (
                  <Menu size={24} className="text-gray-200" />
                )}
              </button>
            </div>

            {/* Center: Section Title */}
            <h1 className="text-sm font-semibold text-white truncate text-center flex-1 mx-2">
              {currentSection.title}
            </h1>

            {/* Right: Back to Home */}
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center gap-1 px-2 py-1  text-white text-sm rounded-md font-medium transition-colors whitespace-nowrap"
              >
                <HomeIcon className="" />
              </Link>
            </div>
          </div>

          {/* Desktop Sticky Header */}
          <header className="hidden xl:block fixed w-full top-0 z-30 bg-black/90 backdrop-blur-sm border-b border-gray-800 shadow-md">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-center ml-8">
              <h1 className="text-lg sm:text-xl font-bold text-white truncate">
                {currentSection.title}
              </h1>
            </div>
          </header>

          {/* Scrollable Content */}
          <main className="flex-1 overflow-y-auto max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-[300px] scrollbar-hide">
            <article className="prose prose-invert prose-lg max-w-none">
              {renderContent(currentSection.content)}
            </article>
{/* Prev/Next Buttons - Fixed Bottom, Compact & Responsive */}
<div
  className={`fixed bottom-0  left-0 right-0 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 px-2 sm:px-4 py-2 sm:py-3 bg-black border-t border-gray-800 shadow-lg transition-all duration-300 z-50 xl:left-80 xl:w-[calc(100%-20rem)]`}
  style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
>
  {/* Previous Button */}
  {prev ? (
    <button
      onClick={() => handleSectionClick(prev.id)}
      className="w-[200px] mb-4  flex items-center justify-evenly gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 bg-gray-800 rounded-full text-white font-medium shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-900 transition-all duration-300 group text-xs sm:text-sm"
    >
      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 group-hover:-translate-x-1 transition-transform duration-300" />
      <div className="flex flex-col text-left flex-shrink">
        <span className="text-[15px] sm:text-[20px] text-gray-400">Previous</span>
        {/* <span className="font-semibold text-white truncate">{prev.title}</span> */}
      </div>
    </button>
  ) : (
    <div className="w-full sm:w-[45%]" />
  )}

  {/* Next Button */}
  {next ? (
    <button
      onClick={() => handleSectionClick(next.id)}
      className="w-[200px] mb-4 flex items-center justify-evenly gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full text-white font-medium shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 group text-xs sm:text-sm"
    >
      <div className="flex flex-col text-right flex-shrink">
        <span className="text-[15px] sm:text-[20px] text-primary-200">Next</span>
        {/* <span className="font-semibold text-white truncate">{next.title}</span> */}
      </div>
      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:translate-x-1 transition-transform duration-300" />
    </button>
  ) : (
    <div className="w-full sm:w-[45%]" />
  )}
</div>





          </main>

          {/* Scroll-to-top Button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-28 right-8 p-3 bg-primary-600 hover:bg-primary-500 text-white rounded-full shadow-lg transition-all duration-200 z-40 hover:scale-110"
            >
              <ArrowUp size={24} />
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default WhitepaperPage;
