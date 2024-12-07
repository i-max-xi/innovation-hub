import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { CustomButton } from "@/components/shared/shared_customs";

// Define Zod validation schema
const requestQuotationSchema = z.object({
  services: z
    .array(z.string())
    .nonempty("You must select at least one service."),
  name: z.string().min(1, "Your name is required."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().optional(),
});

type RequestFormData = z.infer<typeof requestQuotationSchema>;

const servicesOptions = [
  { label: "Web Development", value: "web-development" },
  { label: "SEO Optimization", value: "seo" },
  { label: "Mobile App Development", value: "mobile-app" },
  { label: "E-commerce Solutions", value: "e-commerce" },
  { label: "Branding & Design", value: "branding" },
];

const RequestQuotation = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestFormData>({
    resolver: zodResolver(requestQuotationSchema),
  });

  // Handle form submission
  const onSubmit: SubmitHandler<RequestFormData> = (data) => {
    // Handle the form data submission logic here (e.g., send to API)
    console.log(data);
  };

  return (
    <main className="my-4 md:my-6 container mx-auto mb-10">
      <section className="hero-section py-10 text-center">
        <h1 className="text-2xl lg:text-5xl font-bold text-primary mb-4">
          Request a Quotation
        </h1>
        <p className="text-xs lg:text-sm text-gray-700 max-w-2xl mx-auto">
          Let us know your requirements and we'll get back to you with a quote.
        </p>
      </section>
      <section className="space-y-6">
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
          {/* Services Multi-Select Field */}
          <Controller
            name="services"
            control={control}
            render={({ field }) => (
              <Select
                label="Select the services you're interested in"
                placeholder="Choose services"
                multiple
                {...field}
                isInvalid={Boolean(errors.services)}
              >
                {servicesOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>
            )}
          />
          {errors.services && (
            <div className="text-red-600 text-sm">
              {errors.services.message}
            </div>
          )}

          {/* Contact Name Input */}
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                label="Name"
                placeholder="Enter your full name"
                isRequired
                {...field}
                isInvalid={Boolean(errors.name)}
              />
            )}
          />
          {errors.name && (
            <div className="text-red-600 text-sm">{errors.name.message}</div>
          )}

          {/* Contact Email Input */}
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email address"
                isRequired
                {...field}
                errorMessage={errors.email ? errors.email.message : undefined}
                isInvalid={Boolean(errors.email)}
              />
            )}
          />
          {errors.email && (
            <div className="text-red-600 text-sm">{errors.email.message}</div>
          )}

          {/* Message Textarea */}
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <Textarea
                label="Additional Details"
                placeholder="Provide any other details we should know"
                {...field}
                errorMessage={
                  errors.message ? errors.message.message : undefined
                }
                isInvalid={Boolean(errors.message)}
              />
            )}
          />
          {errors.message && (
            <div className="text-red-600 text-sm">{errors.message.message}</div>
          )}

          {/* Submit Button */}
          <div className="mt-4 text-center">
            <CustomButton
              className="px-6 py-3 bg-primary text-white font-semibold rounded-md"
              type="submit"
            >
              Submit Request
            </CustomButton>
          </div>
        </form>
      </section>
    </main>
  );
};

export default RequestQuotation;
