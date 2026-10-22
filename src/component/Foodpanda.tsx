'use client'

import { useState } from "react"
import { Item } from "@/lib/product"

export default function ProductCard({ title, price, desc, image }: Item) {

  const lines: string[] = [title, price, desc];
  const [shown, setShown] = useState<string[]>([]);

  return (
    // jsx
    <section className="flex items-center justify-between border rounded-2xl p-5 w-full">

      {/* result */}
      <section className="min-h-24 flex-1">
        {shown.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </section>

      <section className="flex flex-col items-center gap-2">
        <img src={image} alt={title} className="w-28 h-28 object-cover rounded-xl" />

        <section className="flex gap-2">
          <button
            className="border px-3 rounded"onClick={() => setShown([...shown, lines[shown.length]])}>+</button>

          <button
            className="border px-3 rounded"onClick={() => setShown(shown.slice(0, -1))} >-</button>
        </section>
      </section>

    </section>
  )
}