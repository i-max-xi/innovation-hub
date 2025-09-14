import { CustomButton } from '@/components/shared/shared_customs';
import { services } from '@/utils/data/services.data';
import { variables } from '@/utils/env';
import { zodResolver } from '@hookform/resolvers/zod';
import { Select, SelectItem, Input, Textarea } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { PopupButton } from 'react-calendly';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

// Define Zod validation schema
const requestQuotationSchema = z.object({
  services: z
    .array(z.string())
    .nonempty('You must select at least one service.'),
  name: z.string().min(1, 'Your name is required.'),
  contact: z.string().min(1),
  message: z.string().optional(),
});

type RequestFormData = z.infer<typeof requestQuotationSchema>;

const servicesOptions = [
  ...services.map((service) => ({
    label: service.title,
    value: service.title,
  })),
];

const RequestQuotation = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RequestFormData>({
    resolver: zodResolver(requestQuotationSchema),
    defaultValues: {
      contact: '',
      services: [],
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const calendlyButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e?.data?.event === 'calendly.event_scheduled') {
        toast.success('Meeting booked!');
        navigate('/');
      }
    };

    window.addEventListener('message', handleCalendlyEvent);

    return () => {
      window.removeEventListener('message', handleCalendlyEvent);
    };
  }, [navigate]);

  // Handle form submission
  const onSubmit: SubmitHandler<RequestFormData> = async (data) => {
    const data_to_send = {
      ...data,
      subject: 'New Quotation Request - Augwell Technologies',
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

      reset(), toast.success('Details submitted successfully');
      calendlyButtonRef.current?.querySelector('button')?.click();
    } catch (error) {
      toast.error('Failed to submit, Please try again');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className="container  mx-auto px-4 py-20">
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Request Quotation
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          We'll contact you within 24 hours to discuss your project
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white dark:bg-gray-700 rounded-3xl p-8 md:p-12 shadow-2xl"
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Services Multi-Select Field */}
          <div>
            <Controller
              name="services"
              control={control}
              render={({ field }) => (
                <Select
                  label="Select the services you're interested in"
                  placeholder="Choose services"
                  selectionMode="multiple"
                  selectedKeys={new Set(field.value)}
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys as Set<string>))
                  }
                  isInvalid={Boolean(errors.services)}
                  classNames={{
                    label: 'text-gray-700 dark:text-gray-300 font-medium',
                    trigger:
                      'bg-gray-50 dark:bg-gray-600 border-gray-200 dark:border-gray-500 rounded-xl',
                  }}
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
              <div className="text-red-600 text-sm mt-2">
                {errors.services.message}
              </div>
            )}
          </div>

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

          {/* Contact Input */}
          <div>
            <Controller
              name="contact"
              control={control}
              render={({ field }) => (
                <Input
                  label="Email or Phone"
                  placeholder="Enter your email or phone number"
                  isRequired
                  {...field}
                  isInvalid={Boolean(errors.contact)}
                  classNames={{
                    label: 'text-gray-700 dark:text-gray-300 font-medium',
                    input:
                      'bg-gray-50 dark:bg-gray-600 border-gray-200 dark:border-gray-500 rounded-xl',
                  }}
                />
              )}
            />
            {errors.contact && (
              <div className="text-red-600 text-sm mt-2">
                {errors.contact.message}
              </div>
            )}
          </div>

          {/* Message Textarea */}
          <div>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <Textarea
                  label="Project Details"
                  placeholder="Tell us about your project, goals, and any specific requirements"
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

          {/* Hidden Calendly Button */}
          <div className="hidden" ref={calendlyButtonRef}>
            <PopupButton
              url="https://calendly.com/infoaugwelltech"
              rootElement={document.getElementById('root')!}
              text="Schedule a Meeting"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-6">
            <CustomButton
              isLoading={isLoading}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              type="submit"
            >
              {isLoading ? 'Submitting...' : 'Book a Meeting'}
            </CustomButton>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-3">
              We'll contact you within 24 hours to discuss your project
            </p>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default RequestQuotation;
