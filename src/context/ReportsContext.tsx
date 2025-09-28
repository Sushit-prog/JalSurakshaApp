
"use client";

import { createContext, useState, ReactNode, useEffect } from "react";
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Report } from "@/components/recent-reports-table";

type ReportsContextType = {
  reports: Report[];
  addReport: (report: Omit<Report, 'id' | 'date'>) => Promise<void>;
};

export const ReportsContext = createContext<ReportsContextType>({
  reports: [],
  addReport: async () => {},
});

export const ReportsProvider = ({ children }: { children: ReactNode }) => {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    const q = query(collection(db, "reports"), orderBy("date", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const reportsData: Report[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        reportsData.push({
          id: doc.id,
          ...data
        } as Report);
      });
      setReports(reportsData);
    });

    return () => unsubscribe();
  }, []);

  const addReport = async (report: Omit<Report, 'id'|'date'>) => {
    try {
      await addDoc(collection(db, "reports"), {
        ...report,
        date: new Date().toISOString(),
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <ReportsContext.Provider value={{ reports, addReport }}>
      {children}
    </ReportsContext.Provider>
  );
};
