import { Button } from "~/components/ui/button";
import Head from "next/head";
import toast from "react-hot-toast";
import Link from "next/link";
import { Input } from "~/components/ui/input";

import { api } from "~/utils/api";
import { useState } from "react";

export default function Home() {
  const saveAlink = api.example.saveALink.useMutation();
  const [link, setLink] = useState("https://prabincankod.me");
  const [slug, setSlug] = useState("prabincankod");
  return (
    <>
      <Head>
        <title>Linkr</title>
        <meta name="description" content="short links for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-screen flex-col items-center justify-center">
        <div className="flex h-screen flex-col justify-center sm:w-2/3 md:w-1/2 lg:w-1/3">
          <div className="flex items-center">
            <span className="mr-2 font-medium">https://linkr.prasu.co/r/</span>
            <Input
              type="text"
              placeholder="prabincankod"
              className="my-1 block w-full rounded-md border border-slate-300 p-2 text-black placeholder-slate-400 shadow-sm sm:text-sm"
              pattern="^[-a-zA-Z0-9]+$"
              title="Only alphanumeric characters and hypens are allowed. No spaces."
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
            />
            {/* <input
              type="button"
              className="cursor-pointer rounded bg-pink-500 px-1 py-1.5 font-bold"
              value="Random"  
            /> */}

            <Button className="ml-2 " variant={"default"}>
              Random
            </Button>
          </div>
          <div className="flex items-center">
            <span className="mr-2 font-medium">Link</span>
            <Input
              value={link}
              onChange={(e) => setLink(e.target.value)}
              type="url"
              placeholder="https://google.com"
              className="my-1 block w-full rounded-md border border-slate-300 bg-white p-2 text-black placeholder-slate-400 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-1 focus:ring-pink-500 sm:text-sm"
            />
          </div>
          <Button
            disabled={saveAlink.isLoading ? true : false}
            onClick={() => {
              saveAlink.mutate(
                { link: link, slug: slug },
                {
                  onSuccess: () => {
                    toast.success("link created successfully");
                  },
                  onError: () => toast.error("error"),
                },
              );
            }}
          >
            create
          </Button>
        </div>
      </div>
    </>
  );
}
