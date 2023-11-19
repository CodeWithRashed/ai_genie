import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Dialog,
  DialogFooter,
  Button,
} from "@material-tailwind/react";

import { FaRegUserCircle as UserCircleIcon } from "react-icons/fa";
import {
  MdDashboard as PresentationChartBarIcon,
  MdInbox as InboxIcon,
} from "react-icons/md";

import { TbPhotoCog } from "react-icons/tb";
import { IoCodeWorking } from "react-icons/io5";
import { MdSummarize } from "react-icons/md";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { SiAudiomack } from "react-icons/si";
import { BiSolidNoEntry } from "react-icons/bi";

import aiGenieIcon from "../../../../public/favicon.png";
import ProTag from "../../Shared/ProTag";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function UserDashNav() {
  const navigator = useNavigate();
  const [isPro, setIsPro] = useState(false);
  const [size, setSize] = useState(null);
  const handleOpen = (value) => setSize(value);
  const navigatePros = (location) => {
    if (isPro) {
      navigator(location);
    } else {
      console.log("You are not pro");
      handleOpen("sm");
    }
  };

  return (
    <div>
      <Card className=" w-full p-4 shadow-xl shadow-blue-gray-900/5">
        <List>
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
          <hr className="mb-3" />

          <ListItem>
            <ListItemPrefix>
              <TbPhotoCog className="h-5 w-5" />
            </ListItemPrefix>
            Image Generation
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <IoCodeWorking className="h-5 w-5" />
            </ListItemPrefix>
            Code Generation
          </ListItem>
          <button
            onClick={() => {
              let location = "/dashboard/text-to-speech";
              navigatePros(location);
            }}
          >
            <ListItem>
              <ListItemPrefix>
                <MdSummarize className="h-5 w-5" />
              </ListItemPrefix>
              Summarize
              {!isPro && (
                <ListItemSuffix>
                  <ProTag></ProTag>
                </ListItemSuffix>
              )}
            </ListItem>
          </button>

          <ListItem>
            <ListItemPrefix>
              <IoChatboxEllipsesSharp className="h-5 w-5" />
            </ListItemPrefix>
            AI Chat
          </ListItem>
          <button
            onClick={() => {
              let location = "/dashboard/text-to-speech";
              navigatePros(location);
            }}
          >
            <ListItem>
              <ListItemPrefix>
                <SiAudiomack className="h-5 w-5" />
              </ListItemPrefix>
              Text to Speech
              {!isPro && (
                <ListItemSuffix>
                  <ProTag></ProTag>
                </ListItemSuffix>
              )}
            </ListItem>
          </button>
          <hr className="mt-3" />
          <button
            onClick={() => {
              let location = "/dashboard/text-to-speech";
              navigatePros(location);
            }}
          >
            <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Support Inbox
              {!isPro && (
                <ListItemSuffix>
                  <ProTag></ProTag>
                </ListItemSuffix>
              )}
              {isPro && (
                <ListItemSuffix>
                  <Chip
                    value="0"
                    size="sm"
                    variant="ghost"
                    color="blue-gray"
                    className="rounded-full"
                  />
                </ListItemSuffix>
              )}
            </ListItem>
          </button>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
        </List>
        <Card className="relative mt-10 mx-auto rounded-main  bg-color-primary bg-gradient-to-t  from-[#4A25E1]  to-color-primary p-5 text-white text-center">
          <div className="absolute top-[-20%] translate-x-full translate-y-[-5%] border-2 border-white p-2 bg-color-primary rounded-full">
            <img className="h-10 w-10" src={aiGenieIcon} alt="" />
          </div>
          <Typography variant="h6" className="mb-1">
            Go unlimited with PRO
          </Typography>
          <Typography variant="small" className="font-normal opacity-80">
            Get your Project to another level and start doing more with AI Genie
            PRO!
          </Typography>
          <div className="mt-4 flex gap-3 mx-auto">
            <button className="bg-color-primary rounded-main px-3 py-2">
              <Typography
                as="a"
                href="#"
                variant="small"
                className="font-medium"
              >
                Upgrade Now
              </Typography>
            </button>
          </div>
        </Card>
      </Card>

      {/* modal */}
      <Dialog
        open={size === "sm"}
        size={size || "sm"}
        handler={handleOpen}
        className="rounded-main"
      >
        <div className="p-10">
          <BiSolidNoEntry className="text-5xl text-center w-full text-red-800"></BiSolidNoEntry>
          <p className="mt-5 text-color-title text-center text-xl">
            {" "}
            This Feature is Only Available for Pro Users
          </p>
        </div>

        <DialogFooter className="flex justify-center items-center gap-5">
          <Button
            variant="black"
            color="Black"
            onClick={handleOpen}
            className="mr-1 rounded-main"
          >
            <span>Cancel</span>
          </Button>
          <Button
            className="bg-color-primary rounded-main"
            onClick={handleOpen}
          >
            <span>Upgrade</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
