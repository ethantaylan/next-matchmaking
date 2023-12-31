"use client";
import { AddNewPlayerDialog } from "@/components/add-new-player-dialog/add-new-player-dialog";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CopyIcon,
  MoreHorizontal,
  PlusSquare,
  Trash2,
  UserMinus,
  UserPlus,
} from "lucide-react";
import { FC, ReactNode, useEffect, useState } from "react";

export interface LoadingProps {
  children: ReactNode;
}

export const Loading: FC<LoadingProps> = ({ children }) => {
  const [ready, setReady] = useState<boolean>(false);

  useEffect(() => {
    setReady(true);
  }, []);
  return ready ? (
    children
  ) : (
    <div className="p-10">
      <MoreHorizontal />
    </div>
  );
};

export default function Home() {
  const [players, setPlayers] = useState<string[]>([""]);

  return (
    <Loading>
      <main className="flex flex-col items-center p-10 h-screen w-screen">
        <h1 className="text-2xl font-bold mb-10">Matchmaker ⚽</h1>

        <div className="flex flex-col w-full gap-3">
          <div className="flex w-full">
            <Input />
            <Button variant="destructive" className="ms-2">
              <Trash2 />
            </Button>
          </div>

          <AddNewPlayerDialog />
        </div>
      </main>
    </Loading>
  );
}
