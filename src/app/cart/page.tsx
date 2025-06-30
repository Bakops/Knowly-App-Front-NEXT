"use client";
import { useCart } from "@/components/layout/CartContextComponent";
import HeaderComponent from "@/components/layout/HeaderComponent";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [removingId, setRemovingId] = useState<number | null>(null);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const amount = Math.round(total * 100);
      const res = await fetch(
        "https://api-spring-l3i0.onrender.com/stripe/checkout?amount=" + amount,
        {
          method: "POST",
        }
      );
      const url = await res.text();
      if (url.startsWith("http")) {
        window.location.href = url;
      } else {
        alert("Erreur lors de la redirection vers Stripe.");
      }
    } catch (e) {
      alert("Erreur lors de la connexion à Stripe.");
    }
    setLoading(false);
  };

  const handleRemove = (id: number) => {
    setRemovingId(id);
    setTimeout(() => {
      removeFromCart(id);
      setRemovingId(null);
    }, 350); // durée de l'animation
  };

  return (
    <>
      <HeaderComponent />
      <div className="min-h-screen bg-white flex flex-col items-center py-10 font-poppins">
        <div className="w-full max-w-5xl bg-gray-800 rounded-lg shadow-lg p-8 animate-fade-in">
          <h1 className="text-2xl font-bold text-[#c3cc50] mb-6 text-center animate-fade-in-down">
            Votre panier
          </h1>
          {cart.length === 0 ? (
            <div className="text-white text-center mb-6 animate-fade-in-up">
              Le panier est vide.
              <br />
              <Link
                href="/"
                className="text-blue-400 underline hover:text-blue-200 transition"
              >
                Retour à l'accueil
              </Link>
            </div>
          ) : (
            <>
              <ul className="mb-6">
                {cart.map((item, idx) => (
                  <li
                    key={item.id}
                    className={`flex justify-between items-center bg-gray-700 rounded p-4 mb-3 transition-all duration-300
                      ${
                        removingId === item.id
                          ? "opacity-0 scale-95 blur-sm"
                          : "opacity-100 scale-100"
                      }
                      animate-fade-in-up`}
                    style={{ animationDelay: `${idx * 0.07 + 0.1}s` }}
                  >
                    <div>
                      <span className="font-bold text-[#c3cc50]">
                        {item.name}
                      </span>
                      <span className="text-white ml-2">x{item.quantity}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-white font-semibold mr-4">
                        {item.price * item.quantity} €
                      </span>
                      <button
                        className="bg-[#ea3535] text-white px-3 py-1 rounded hover:bg-red-700 transition-all duration-200 shadow hover:scale-105"
                        onClick={() => handleRemove(item.id)}
                        disabled={removingId === item.id}
                      >
                        Supprimer
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center mb-6 animate-fade-in-up">
                <span className="text-lg text-white font-bold">Total :</span>
                <span className="text-lg text-[#c3cc50] font-bold">
                  {total} € TTC
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <button
                  className={`bg-[#c3cc50] text-gray-900 font-bold px-6 py-2 rounded shadow-lg transition-all duration-200
                    hover:bg-[#b1b93f] hover:scale-105 focus:ring-2 focus:ring-[#c3cc50] focus:ring-offset-2
                    ${loading ? "animate-pulse" : ""}`}
                  onClick={handleCheckout}
                  disabled={loading}
                  title="Payer avec Stripe"
                >
                  {loading ? "Redirection..." : "Payer"}
                </button>
                <button
                  className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700 transition-all duration-200 shadow hover:scale-105"
                  onClick={clearCart}
                  disabled={loading}
                >
                  Vider le panier
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
