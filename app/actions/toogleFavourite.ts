"use server";

import prisma from "@/lib/prismadb";
import getCurrentUser from "./getCurrentUser";

export async function toogleFavourite(listingId: string) {
  const currentUser = await getCurrentUser();
  if (!currentUser) return;
  const favoriteIds = currentUser?.favoriteIds || [];
  const isFavorite = favoriteIds.includes(listingId);
  if (!isFavorite) {
    await addToFavorite(currentUser, listingId);
  } else {
    await removeFromFavorite(currentUser, listingId);
  }
}

const addToFavorite = async (currentUser: any, listingId: string) => {
  let favoriteIds = [...(currentUser.favoriteIds || [])];
  favoriteIds.push(listingId);
  await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds,
    },
  });
};

const removeFromFavorite = async (currentUser: any, listingId: string) => {
  let favoriteIds = [...(currentUser.favoriteIds || [])];
  favoriteIds = favoriteIds.filter((id) => id !== listingId);
  await prisma.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoriteIds,
    },
  });
};
