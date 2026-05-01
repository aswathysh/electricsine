"use client";
import React, { useState } from "react";
import "./LoginPageCheck.css";
import Image from "next/image";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("login");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    }, 1200);
  };

  return (<>
    <main className="lp-page" role="main" aria-label="Login page">
        <div className="lp-left"></div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",position:"absolute",padding:"50px 150px"
        }}
      >
        {/* ── LEFT ── */}
        <div className="lp-inner-card">
          <div>
            <Image
              //onClick={handleHome}
              src="/assets/images/logo.png"
              alt=" logo"
              className="headerlogo"
              width={10}
              height={10}
            />
          </div>

          <p className="lp-tagline">
            We&apos;re an Engineering Learning Platform.
          </p>

          <div className="lp-social-btns">
            <button
              className="lp-social-btn"
              type="button"
              aria-label="Sign in with Google"
            >
              <svg
                className="lp-social-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Sign in with Google
            </button>

            <button
              className="lp-social-btn"
              type="button"
              aria-label="Sign in with Facebook"
            >
              <svg
                className="lp-social-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="#1877F2"
              >
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.027 4.388 11.022 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.928-1.956 1.88v2.27h3.328l-.532 3.49h-2.796v8.437C19.612 23.095 24 18.1 24 12.073z" />
              </svg>
              Sign in with Facebook
            </button>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <section className="lp-right" aria-label="Login form">
          <div className="lp-form-card">
            <div className="lp-form-top">
              <h1 className="lp-heading">
                {activeTab === "login" ? "Login" : "Register"}
              </h1>
              <div
                className="lp-tabs"
                role="tablist"
                aria-label="Login or Register"
              >
                <button
                  role="tab"
                  aria-selected={activeTab === "login"}
                  className={`lp-tab${activeTab === "login" ? " lp-tab--active" : ""}`}
                  onClick={() => setActiveTab("login")}
                >
                  Login
                </button>
                <button
                  role="tab"
                  aria-selected={activeTab === "register"}
                  className={`lp-tab${activeTab === "register" ? " lp-tab--active" : ""}`}
                  onClick={() => setActiveTab("register")}
                >
                  Register
                </button>
              </div>
            </div>

            <form className="lp-form" onSubmit={handleLogin} noValidate>
              {activeTab === "register" && (
                <div className="lp-field">
                  <label className="lp-label" htmlFor="lp-name">
                    Full Name
                  </label>
                  <input
                    className="lp-input"
                    id="lp-name"
                    type="text"
                    placeholder="Your full name"
                    autoComplete="name"
                  />
                </div>
              )}

              <div className="lp-field">
                <label className="lp-label" htmlFor="lp-email">
                  Email
                </label>
                <input
                  className="lp-input"
                  id="lp-email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
              </div>

              <div className="lp-field">
                <label className="lp-label" htmlFor="lp-pass">
                  Password
                </label>
                <div className="lp-pass-wrap">
                  <input
                    className="lp-input"
                    id="lp-pass"
                    type={showPass ? "text" : "password"}
                    placeholder="••••••••"
                    autoComplete={
                      activeTab === "login"
                        ? "current-password"
                        : "new-password"
                    }
                  />
                  <button
                    type="button"
                    className="lp-eye"
                    aria-label={showPass ? "Hide password" : "Show password"}
                    onClick={() => setShowPass((v) => !v)}
                  >
                    {showPass ? (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {activeTab === "login" && (
                <div className="lp-remember-row">
                  <label className="lp-remember">
                    <input type="checkbox" /> Keep me logged in
                  </label>
                  <a href="/forgot-password" className="lp-forgot">
                    Forgot Password
                  </a>
                </div>
              )}

              <button
                type="submit"
                className={`lp-submit${success ? " lp-submit--success" : ""}`}
                disabled={loading}
                aria-busy={loading}
              >
                {loading
                  ? "Please wait..."
                  : success
                    ? "✓ Success!"
                    : activeTab === "login"
                      ? "Log in"
                      : "Create Account"}
              </button>

              <p className="lp-switch">
                {activeTab === "login" ? (
                  <>
                    Don&apos;t have an account?
                    <button
                      type="button"
                      className="lp-switch-btn"
                      onClick={() => setActiveTab("register")}
                    >
                      Register
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      type="button"
                      className="lp-switch-btn"
                      onClick={() => setActiveTab("login")}
                    >
                      Login
                    </button>
                  </>
                )}
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
    </>
  );
}
