import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input, Textarea } from '@nextui-org/react';
import { CustomButton } from '@/components/shared/shared_customs';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { variables } from '@/utils/env';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

// Define Zod validation schema
const supportSchema = z.object({
  name: z.string().min(1, 'Your name is required.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().optional(),
  message: z.string().optional(),
});

type RequestFormData = z.infer<typeof supportSchema>;

const Support = () => {
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
    <main className="bg-white dark:bg-gray-900">
      {/* Contact Form Section */}
      <section className=" bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-3xl p-8 md:p-12 shadow-2xl"
            >
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                {/* Contact Name Input */}
                <div>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <Input
                        label="Full Name"
                        placeholder="Enter your full name"
                        isRequired
                        {...field}
                        isInvalid={Boolean(errors.name)}
                        classNames={{
                          label: 'text-gray-700 dark:text-gray-300 font-medium',
                          input:
                            'bg-gray-50 dark:bg-gray-600 border-gray-200 dark:border-gray-500 rounded-xl',
                        }}
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
                        label="Email Address"
                        type="email"
                        placeholder="Enter your email address"
                        isRequired
                        {...field}
                        errorMessage={
                          errors.email ? errors.email.message : undefined
                        }
                        isInvalid={Boolean(errors.email)}
                        classNames={{
                          label: 'text-gray-700 dark:text-gray-300 font-medium',
                          input:
                            'bg-gray-50 dark:bg-gray-600 border-gray-200 dark:border-gray-500 rounded-xl',
                        }}
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
                <div>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <Input
                        label="Phone Number (Optional)"
                        placeholder="Enter your phone number"
                        {...field}
                        classNames={{
                          label: 'text-gray-700 dark:text-gray-300 font-medium',
                          input:
                            'bg-gray-50 dark:bg-gray-600 border-gray-200 dark:border-gray-500 rounded-xl',
                        }}
                      />
                    )}
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <Controller
                    name="message"
                    control={control}
                    render={({ field }) => (
                      <Textarea
                        label="How can we help?"
                        placeholder="Describe your question or support need in detail"
                        {...field}
                        classNames={{
                          label: 'text-gray-700 dark:text-gray-300 font-medium',
                          input:
                            'bg-gray-50 dark:bg-gray-600 border-gray-200 dark:border-gray-500 rounded-xl',
                        }}
                        minRows={4}
                      />
                    )}
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-6">
                  <CustomButton
                    isLoading={isLoading}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    type="submit"
                  >
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </CustomButton>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mt-3">
                    We'll respond to your message within 24 hours
                  </p>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Support;
