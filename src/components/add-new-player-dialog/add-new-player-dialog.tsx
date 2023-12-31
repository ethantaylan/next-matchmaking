import React, { FC, useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { UserPlus } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const AddNewPlayerDialog: FC = () => {
  const [playerNameInput, setPlayerNameInput] = useState<string>();

  console.log(playerNameInput)

  console.log(process.env.NEXT_SUPABASE_URL)

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">
          <UserPlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>{"Ajout d'un nouveau joueur"}</DialogTitle>
        </DialogHeader>

        <Input
          onChange={(event) => setPlayerNameInput(event.target.value)}
          placeholder="Nom du joueur"
        />

        <DialogFooter className="sm:justify-end">
          <div className="flex gap-5">
            <DialogClose asChild>
              <Button type="button" className="w-full" variant="secondary">
                Retour
              </Button>
            </DialogClose>
            <Button className="w-full" variant="default">
              Ajouter
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
