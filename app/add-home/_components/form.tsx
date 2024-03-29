"use client";

import * as z from "zod";
import React from "react";
import { handelAddHome } from "@/app/actions/handelAddHome";
import { useEdgeStore } from "@/lib/edgestore";
import formSchema from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {
  FormControl,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/constants";
import { Label } from "@/components/ui/label";
import { CheckIcon, ChevronDown } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import useCountries from "@/hook/useCountries";

const AddHomeForm = () => {
  const { edgestore } = useEdgeStore();
  const router = useRouter();
  const { getAll } = useCountries();
  const countries = getAll();

  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const [files, setFiles] = React.useState<File[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      price: 0,
    },
  });

  const handleImageUpload = async () => {
    try {
      const urls: string[] = [];

      for (const singleFile of files) {
        const res = await edgestore.publicFiles.upload({
          file: singleFile,
        });
        urls.push(res.url);
      }
      return urls;
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (files.length === 0) {
      toast.error("Upload at least one image");
      return;
    }
    const imageUrls: string[] = (await handleImageUpload()) || [];
    if (imageUrls.length === 0) {
      toast.error("Failed to upload images. Please try again.");
      return;
    }
    await handelAddHome(values, imageUrls);
    toast.success("Your home is added successfully");
    router.push("/");
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-4xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price/night</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    {...field}
                    {...form.control.register("price", {
                      valueAsNumber: true,
                    })}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Location</FormLabel>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? countries.find(
                              (country) => country.label === field.value
                            )?.label
                          : "Select country"}
                        <ChevronDown className="ml-2 h-4 w-4 shrink-0" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[450px] p-0">
                    <Command>
                      <CommandInput
                        placeholder="Search your country"
                        className="h-9"
                      />
                      <CommandEmpty>No country found.</CommandEmpty>
                      <CommandGroup className="h-[120px] overflow-y-auto">
                        {countries.map((country) => (
                          <CommandItem
                            value={country.label}
                            key={country.label}
                            onSelect={() => {
                              form.setValue("country", country.label);
                              form.clearErrors("country");
                              setOpen(false);
                            }}
                          >
                            {country.label}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                country.label === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Category</FormLabel>
                <Popover open={open2} onOpenChange={setOpen2}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? categories.find(
                              (category) => category.value === field.value
                            )?.label
                          : "Select Category"}
                        <ChevronDown className="ml-2 h-4 w-4 shrink-0" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[450px] p-0">
                    <Command>
                      <CommandInput
                        placeholder="Search Category"
                        className="h-9"
                      />
                      <CommandEmpty>No category found.</CommandEmpty>
                      <CommandGroup className="h-[120px] overflow-y-auto">
                        {categories.map((category) => (
                          <CommandItem
                            value={category.label}
                            key={category.value}
                            onSelect={() => {
                              form.setValue("category", category.value);
                              form.clearErrors("category");
                              setOpen2(false);
                            }}
                          >
                            {category.label}
                            <CheckIcon
                              className={cn(
                                "ml-auto h-4 w-4",
                                category.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="guestCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Guest</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the guest number" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5 or More">5 or More</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="roomCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Rooms</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the guest number" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5 or More">5 or More</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bathroomCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Bathroom</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the number of bathroom" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5 or More">5 or More</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-2">
            <Label htmlFor="picture">Picture</Label>
            <Input
              multiple
              onChange={(e) => setFiles(Array.from(e.target.files || []))}
              type="file"
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell about your place"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          className="w-full"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default AddHomeForm;
