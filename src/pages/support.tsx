import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input, Textarea } from '@nextui-org/react';
import { CustomButton } from '@/components/shared/shared_customs';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { variables } from '@/utils/env';
import { inquiryInputClasses, inquirySubmitClass } from '@/components/shared/inquiry-form-styles';
// import { Icon } from '@iconify/react';

// Define Zod validation schema
const supportSchema = z.object({
  name: z.string().min(1, 'Your name is required.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type RequestFormData = z.infer<typeof supportSchema>;

const Support = ({ embedded = false }: { embedded?: boolean }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RequestFormData>({
    resolver: zodResolver(supportSchema),
    defaultValues: {
      phone: '',
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const onSubmit: SubmitHandler<RequestFormData> = async (data) => {
    const data_to_send = {
      ...data,
      subject: 'Support needed - Augwell Technologies',
    };

    try {
      setIsLoading(true);

      await fetch(variables.formspree, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data_to_send),
      });

      reset(),
        toast.success(
          'Details submitted successfully, we will contact you soon!',
        );
    } catch (error) {
      toast.error('Failed to submit, Please try again');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section aria-labelledby="message-form-heading" className={`bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-sm ${embedded ? '' : 'mx-4 md:mx-auto max-w-3xl my-12 md:my-20'}`}>
      <h2 id="message-form-heading" className="text-2xl font-bold text-gray-900 dark:text-white">Send us a message</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-2 mb-8">A project idea, a question, or a support request—we’re here to help.</p>
      <form className="grid sm:grid-cols-2 gap-x-5 gap-y-6" onSubmit={handleSubmit(onSubmit)}>
                {/* Contact Name Input */}
                <div>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <Input
                        labelPlacement="outside"
                        variant="bordered"
                        label="Full name"
                        autoComplete="name"
                        placeholder="Enter your full name"
                        isRequired
                        {...field}
                        isInvalid={Boolean(errors.name)}
                        classNames={inquiryInputClasses}
                      />
                    )}
                  />
                  {errors.name && (
                    <div className="text-red-600 text-sm mt-2">
                      {errors.name.message}
                    </div>
                  )}
                </div>

                {/* Contact Email Input */}
                <div>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <Input
                        labelPlacement="outside"
                        variant="bordered"
                        label="Email address"
                        autoComplete="email"
                        type="email"
                        placeholder="Enter your email address"
                        isRequired
                        {...field}
                        errorMessage={
                          errors.email ? errors.email.message : undefined
                        }
                        isInvalid={Boolean(errors.email)}
                        classNames={inquiryInputClasses}
                      />
                    )}
                  />
                  {errors.email && (
                    <div className="text-red-600 text-sm mt-2">
                      {errors.email.message}
                    </div>
                  )}
                </div>

                {/* Phone Input */}
                <div className="sm:col-span-2">
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <Input
                        labelPlacement="outside"
                        variant="bordered"
                        label="Phone number (optional)"
                        autoComplete="tel"
                        placeholder="Enter your phone number"
                        {...field}
                        classNames={inquiryInputClasses}
                      />
                    )}
                  />
                </div>

                {/* Message Textarea */}
                <div className="sm:col-span-2">
                  <Controller
                    name="message"
                    control={control}
                    render={({ field }) => (
                      <Textarea
                        label="How can we help? (optional)"
                        labelPlacement="outside"
                        variant="bordered"
                        placeholder="Tell us about your project, question, or issue. A little context helps us respond."
                        {...field}
                        classNames={inquiryInputClasses}
                        minRows={4}
                      />
                    )}
                  />
                </div>

                {/* Submit Button */}
                <div className="sm:col-span-2 border-t border-gray-100 dark:border-gray-800 pt-6">
                  <CustomButton
                    isLoading={isLoading}
                    className={inquirySubmitClass}
                    type="submit"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </CustomButton>
                  <p className="text-gray-500 dark:text-gray-400 text-xs text-center mt-3">
                    We'll respond to your message within 24 hours
                  </p>
                </div>
      </form>
    </section>
  );
};

export default Support;
