import { CustomButton } from '@/components/shared/shared_customs';
import { services } from '@/utils/data/services.data';
import { variables } from '@/utils/env';
import { zodResolver } from '@hookform/resolvers/zod';
import { Select, SelectItem, Input, Textarea } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import { inquiryInputClasses, inquirySelectClasses, inquirySubmitClass } from '@/components/shared/inquiry-form-styles';
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
    <section className="bg-gray-50 dark:bg-gray-950 py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-300 mb-4">Request a quotation</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900 dark:text-white">Tell us what you<br className="hidden md:block" /> want to build.</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-6">A new product, a better workflow, or an idea you’re still shaping. Share a few details and let’s find the right next step.</p>
            <div className="mt-8 flex items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-200"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200"><Icon icon="heroicons:clock" className="text-lg" /></span>Response within 24 hours</div>
            <div className="border-t border-gray-200 dark:border-gray-700 mt-9 pt-7">
              <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-5">What happens next</h2>
              <ol className="space-y-5">
                {[
                  { title: 'Share your brief', text: 'Tell us who it’s for and what you need it to do.' },
                  { title: 'Choose a meeting time', text: 'After sending your details, the booking calendar opens.' },
                  { title: 'Discuss the scope', text: 'Talk through requirements, budget, and a practical plan.' },
                ].map((step, index) => <li key={step.title} className="flex gap-4"><span className="w-7 h-7 shrink-0 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 flex items-center justify-center text-xs font-semibold text-blue-700 dark:text-blue-200">{index + 1}</span><div><p className="text-sm font-semibold text-gray-900 dark:text-white">{step.title}</p><p className="text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">{step.text}</p></div></li>)}
              </ol>
            </div>
            <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">Prefer email? <a href="mailto:info@augwelltech.com" className="font-medium text-blue-700 dark:text-blue-300 hover:underline">info@augwelltech.com</a></p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-700 p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Your project brief</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-8 leading-relaxed">A rough idea is enough to start. Select at least one service and add your contact details.</p>
            <form className="grid sm:grid-cols-2 gap-x-5 gap-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Services Multi-Select Field */}
          <div className="sm:col-span-2">
            <Controller
              name="services"
              control={control}
              render={({ field }) => (
                <Select
                  label="Services you’re interested in"
                  labelPlacement="outside"
                  variant="bordered"
                  placeholder="Choose services"
                  selectionMode="multiple"
                  selectedKeys={new Set(field.value)}
                  onSelectionChange={(keys) =>
                    field.onChange(Array.from(keys as Set<string>))
                  }
                  isInvalid={Boolean(errors.services)}
                  classNames={inquirySelectClasses}
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

          {/* Contact Input */}
          <div>
            <Controller
              name="contact"
              control={control}
              render={({ field }) => (
                <Input
                  labelPlacement="outside"
                  variant="bordered"
                  label="Email or phone"
                  placeholder="Enter your email or phone number"
                  isRequired
                  {...field}
                  isInvalid={Boolean(errors.contact)}
                  classNames={inquiryInputClasses}
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
          <div className="sm:col-span-2">
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <Textarea
                  label="Project details (optional)"
                  labelPlacement="outside"
                  variant="bordered"
                  placeholder="What are you building? Who will use it? Include any budget, timeline, or requirements you have in mind."
                  {...field}
                  classNames={inquiryInputClasses}
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
          <div className="sm:col-span-2 border-t border-gray-100 dark:border-gray-800 pt-6">
            <CustomButton
              isLoading={isLoading}
              className={inquirySubmitClass}
              type="submit"
            >
              {isLoading ? 'Submitting...' : 'Send brief & book a meeting'}
            </CustomButton>
            <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed text-center mt-3">
              Send your details, then choose a meeting time in the calendar.
            </p>
          </div>
        </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestQuotation;
