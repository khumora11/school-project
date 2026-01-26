import React from "react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
} from "../ui/dropdown-menu";
import { Languages } from "lucide-react";
import { useNavigate } from "react-router-dom";

import i18n from "i18next";
import { lngs } from "../../constants";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

const LanguageDropdown = () => {
  const navigate = useNavigate();

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);

    // URL-ni tahlil qilib, til kodini almashtirish
    const segments = window.location.pathname.split("/").filter(Boolean);

    // Birinchi segmentni til kodi deb qabul qilamiz
    if (segments.length > 0 && lngs.some(l => l.route === segments[0])) {
      segments[0] = languageCode;
    } else {
      segments.unshift(languageCode); // Agar til kodi bo‘lmasa, qo‘shamiz
    }

    navigate("/" + segments.join("/"));
  };

  // Joriy til kodini olish
  const currentLng = window.location.pathname.split("/").filter(Boolean)[0] || "en";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <Languages />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-background rounded-md border shadow-lg">
        <DropdownMenuGroup>
          {lngs.map((item) => (
            <DropdownMenuItem
              key={item.route}
              onClick={() => handleLanguageChange(item.route)}
              className={cn(
                "cursor-pointer",
                currentLng === item.route && "bg-secondary"
              )}
            >
              <span className="ml-2 font-spaceGrotesk font-medium">
                {item.label}
              </span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;