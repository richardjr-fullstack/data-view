"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import type { Player } from "./types";
import AddPlayerForm from "./AddPlayerForm";

export default function PlayersTable() {
  const [players, setPlayers] = useState<Player[]>([]);

  // Fetch Players
  const fetchPlayers = async () => {
    const { data, error } = await supabase.from("players").select("*").order("id");
    if (error) console.error(error);
    else setPlayers(data || []);
  };

  // Update Player
  const updatePlayer = async (id: number, updates: Partial<Player>) => {
    const { error } = await supabase.from("players").update(updates).eq("id", id);
    if (error) console.error(error);
    fetchPlayers();
  };

  // Delete Player
  const deletePlayer = async (id: number) => {
    const { error } = await supabase.from("players").delete().eq("id", id);
    if (error) console.error(error);
    fetchPlayers();
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return (
    <div className="container mx-auto py-24">
      <h2 className="text-2xl font-bold pb-4 text-center">Simple Crud</h2>
      <div className="lg:flex gap-6 items-start">
        {/* Add Player Form */}
        <AddPlayerForm onPlayerAdded={fetchPlayers} />

        {/* Table */}
        <div className="overflow-x-auto w-full xl:w-3/4">
          <table className="table-auto border-collapse border w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-2 text-black">Name</th>
                <th className="border px-2 text-black">Weight</th>
                <th className="border px-2 text-black">Age</th>
                <th className="border px-2 text-black">Points</th>
                <th className="border px-2 text-black">Assist</th>
                <th className="border px-2 text-black">Rebound</th>
                <th className="border px-2 text-black">Turnover</th>
                <th className="border px-2 text-black">Actions</th>
              </tr>
            </thead>
            <tbody>
              {players.map((p) => (
                <tr key={p.id}>
                  <td className="border px-2 text-center">{p.player_name}</td>
                  <td className="border px-2 text-center">{p.player_weight}</td>
                  <td className="border px-2 text-center">{p.player_age}</td>
                  <td className="border px-2 text-center">{p.stats_point}</td>
                  <td className="border px-2 text-center">{p.assist}</td>
                  <td className="border px-2 text-center">{p.rebound}</td>
                  <td className="border px-2 text-center">{p.turnover}</td>
                  <td className="border p-2 space-x-2 text-center">
                    <button
                      onClick={() =>
                        updatePlayer(p.id, { stats_point: p.stats_point + 1 })
                      }
                      className="bg-green-500 text-white px-2 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deletePlayer(p.id)}
                      className="bg-red-500 text-white px-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
