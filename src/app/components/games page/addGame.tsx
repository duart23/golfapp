"use client";
import { useEffect, useState } from "react";

export function AddGame({ onClose }: { onClose: () => void }) {
  const [courses, setCourses] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [date, setDate] = useState("");

  const API_URL = process.env.NEXT_PUBLIC_GOLF_API_URL;
  const API_TOKEN = process.env.NEXT_PUBLIC_GOLF_API_TOKEN;

  useEffect(() => {
    if (query.length < 3) {
      setCourses([]);
      return;
    }

    const fetchCourses = async () => {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(`${API_URL}?q=${query}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        setCourses(data.courses); // Adjust based on API response structure
      } catch (err: any) {
        setError("Failed to fetch courses");
      } finally {
        setLoading(false);
      }
    };

    const debounceFetch = setTimeout(fetchCourses, 500); // Debounce input to prevent excessive API calls
    return () => clearTimeout(debounceFetch);
  }, [query]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-300 p-6 rounded-lg w-[600px]">
        <button className="float-right" onClick={onClose}>✕</button>
        <h2 className="text-lg font-bold mb-4">Add Game</h2>

        <input
          type="text"
          placeholder="Search for a course..."
          className="p-2 w-full bg-gray-500 text-white mb-2"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {loading && <p>Loading courses...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {!loading && !error && courses.length > 0 && (
          <select
            className="p-2 w-full bg-gray-500 text-white mb-4"
            onChange={(e) => {
              const course = courses.find((c) => c.id === Number(e.target.value));
              setSelectedCourse(course);
            }}
          >
            <option value="">Select Course</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.name}
              </option>
            ))}
          </select>
        )}

        {selectedCourse && (
          <>
            <p className="text-center mb-4">Loads depending on the course selected</p>
            <div className="flex gap-4">
              {/* <ScoreTable start={1} end={selectedCourse.holes > 9 ? 9 : selectedCourse.holes} />
              {selectedCourse.holes > 9 && <ScoreTable start={10} end={18} />} */}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
