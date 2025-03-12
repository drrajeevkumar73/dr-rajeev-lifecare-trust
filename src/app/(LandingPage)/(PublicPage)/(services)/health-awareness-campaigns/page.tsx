/* eslint-disable @next/next/no-img-element */
import HeadingSec from "@/components/HeadingSec";
import streak from "@/assets/streak.gif";
import Image from "next/image";
import faundation from "@/assets/foundation.webp";
import { excersize } from "../Allarray";

export default function Page() {
  return (
    <main className="space-y-24 py-15">
      <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
        {" "}
        Health Awareness{" "}
        <em className="text-primary relative">
          Campaigns
          <Image
            src={streak}
            alt="streak"
            className="absolute -top-10 right-0"
          />
        </em>
      </HeadingSec>

      <Image src={faundation} alt="faundation" className="w-full" />

      <div className="mx-auto max-w-7xl space-y-16 px-3">
        <div className="space-y-6">
          <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
            {" "}
            What Is{" "}
            <em className="text-primary relative">
              Homeopathy
              <Image
                src={streak}
                alt="streak"
                className="absolute -top-10 right-0"
              />
            </em>
          </HeadingSec>

          <p className="text-muted-foreground">
            Homeopathy is a natural and holistic system of medicine that focuses
            on stimulating the body&lsquo;s self-healing abilities. It was
            developed in the late 18th century by Dr. Samuel Hahnemann and is
            based on the principle of &ldquo;Like Cures Like&ldquo;—meaning that
            a substance that causes symptoms in a healthy person can be used in
            a highly diluted form to treat similar symptoms in a sick person.
          </p>
          <p className="text-muted-foreground">
            Homeopathic remedies are prepared from natural sources like plants,
            minerals, and animal substances, which are diluted and potentized to
            enhance their healing properties while eliminating toxicity. These
            remedies work by triggering the body&lsquo;s vital energy to restore
            balance and health. Homeopathy is known for its gentle, safe, and
            side-effect-free approach, making it suitable for people of all
            ages, including children and pregnant women.
          </p>
          <p className="text-muted-foreground">
            It is widely used for treating both acute and chronic conditions,
            such as allergies, skin disorders, digestive issues, respiratory
            problems, and even emotional disturbances. Homeopathy focuses on
            individualized treatment, considering a person&lsquo;s physical,
            emotional, and mental state to provide a personalized remedy. Due to
            its effectiveness and holistic approach, homeopathy has gained
            worldwide recognition as an alternative and complementary medical
            system.
          </p>
        </div>

        <div className="space-y-6">
          <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
            Benefits of{" "}
            <em className="text-primary relative">
              Homeopathy
              <Image
                src={streak}
                alt="streak"
                className="absolute -top-10 right-0"
              />
            </em>
          </HeadingSec>

          <div className="space-y-6">
            <p>
              <span className="font-bold">1. Natural and Safe – </span>
              <span className="text-muted-foreground">
                Homeopathic medicines are made from natural substances and are
                free from harmful chemicals, making them safe for all age
                groups, including infants, pregnant women, and elderly
                individuals.
              </span>
            </p>

            <p>
              <span className="font-bold">2. No Side Effects – </span>
              <span className="text-muted-foreground">
                Since homeopathic remedies are highly diluted, they do not cause
                side effects or toxicity, unlike conventional medicines.
              </span>
            </p>

            <p>
              <span className="font-bold">3. Holistic Approach – </span>
              <span className="text-muted-foreground">
                Homeopathy treats the root cause of diseases rather than just
                suppressing symptoms. It considers physical, emotional, and
                mental well-being to restore overall health.
              </span>
            </p>

            <p>
              <span className="font-bold">4. Boosts Immunity – </span>
              <span className="text-muted-foreground">
                Homeopathic medicines stimulate the body’s natural healing
                mechanisms, strengthening immunity and preventing recurrent
                illnesses.
              </span>
            </p>
            <p>
              <span className="font-bold">
                5. Effective for Chronic Diseases –{" "}
              </span>
              <span className="text-muted-foreground">
                Homeopathic medicines stimulate the body’s natural healing
                mechanisms, strengthening immunity and preventing recurrent
                illnesses
              </span>
            </p>
            <p>
              <span className="font-bold">6. Individualized Treatment – </span>
              <span className="text-muted-foreground">
                Every person is unique, and homeopathy provides personalized
                treatment based on an individual&lsquo;s specific symptoms,
                lifestyle, and emotional state.
              </span>
            </p>
            <p>
              <span className="font-bold">7. Non-Addictive – </span>
              <span className="text-muted-foreground">
                Homeopathic remedies do not cause dependency or withdrawal
                symptoms, making them safe for long-term use.
              </span>
            </p>
            <p>
              <span className="font-bold">8. Works for All Ages – </span>
              <span className="text-muted-foreground">
                Homeopathy is suitable for children, adults, and the elderly. It
                is gentle yet effective in treating health conditions at
                different life stages.
              </span>
            </p>
            <p>
              <span className="font-bold">9. Cost-Effective – </span>
              <span className="text-muted-foreground">
                Homeopathic treatment is generally more affordable compared to
                conventional medicine, making quality healthcare accessible to
                everyone.
              </span>
            </p>
            <p>
              <span className="font-bold">
                10. Complementary to Other Treatments –{" "}
              </span>
              <span className="text-muted-foreground">
                Homeopathy can be used alongside conventional medicine and other
                therapies without interfering with their effects. It enhances
                overall recovery and well-being.
              </span>
            </p>
          </div>
        </div>

        <div className="space-y-16">
          <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
            {" "}
            Exercise Recommendations for Common{" "}
            <em className="text-primary relative">
              Diseases
              <Image
                src={streak}
                alt="streak"
                className="absolute -top-10 right-0"
              />
            </em>
          </HeadingSec>

          <div className="space-y-6">
            {excersize.map((v) => (
              <>
                <h1 className="text-2xl font-bold" key={v.id}>
                  <span className="text-primary">*</span> {v.heding}{" "}
                  <span className="text-primary">*</span>
                </h1>
                <div className="flex flex-col gap-5 sm:grid md:grid-cols-3 lg:grid-cols-4">
                  {v.allLog.map((value) => (
                    <div className="overflow-hidden border" key={value.id}>
                      <img
                        src={value.img}
                        alt=""
                        className="h-[211px] w-full duration-300 hover:scale-105"
                      />

                      <div className="bg-card p-4 font-bold">{value.desc}</div>
                    </div>
                  ))}
                </div>
              </>
            ))}
          </div>

          <div className="space-y-6">
            <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
              {" "}
              Important Points to{" "}
              <em className="text-primary relative">
                Remember
                <Image
                  src={streak}
                  alt="streak"
                  className="absolute -top-10 right-0"
                />
              </em>
            </HeadingSec>

            <div className="space-y-6">
              <h5 className="text-2xl font-bold">
                <span className="text-primary"> * </span>Must Read & Remember
                for Your Good Health <span className="text-primary"> * </span>
              </h5>
              <p className="text-muted-foreground">
                1. It is a common belief that homeopathy first worsens the
                disease and then cures it. This is incorrect. Homeopathy does
                not increase disease; instead, it treats it from its root
                without any side effects.
              </p>
              <p className="text-muted-foreground">
                2. If you experience phlegm, mucus, or any kind of discharge
                after consuming homeopathic medicine, do not panic. It is a sign
                that the medicine is working to remove the illness from your
                body naturally.
              </p>
              <p className="text-muted-foreground">
                3. Avoid eating or drinking anything 10 minutes before and after
                taking homeopathic medicine. Do not consume raw onions, garlic,
                or strong-smelling substances, as they can reduce the
                effectiveness of the medicine.
              </p>
              <p className="text-muted-foreground">
                4. In daily life, avoid alcohol, tobacco, and other intoxicating
                substances, as they not only harm your health but also reduce
                the effectiveness of homeopathic treatment.
              </p>
              <p className="text-muted-foreground">
                5. Always maintain a proper balance in eating, drinking,
                sleeping, and exercising. This will enhance the effectiveness of
                homeopathic treatment and keep you healthy.
              </p>
              <p className="text-muted-foreground">
                6. If you have any specific allergies or dietary restrictions,
                inform your doctor before starting homeopathic treatment so that
                the medicine can be prescribed accordingly.
              </p>

              <p className="text-muted-foreground">
                8. Homeopathy cures the disease by addressing its root cause,
                unlike other medicines that only suppress symptoms.
              </p>
              <p className="text-muted-foreground">
                9. If your illness has been prolonged and not improving, consult
                your homeopathic doctor at least every 2 to 3 months for a
                check-up. A doctor’s evaluation is necessary to adjust the
                medicine dosage accordingly.
              </p>
              <p className="text-muted-foreground">
                10. Homeopathy can treat all types of illnesses effectively.
                However, it is important to choose an experienced and qualified
                homeopathic doctor for your treatment.
              </p>
              <p className="text-muted-foreground">
                11. Homeopathy is beneficial for your entire family. It is safe
                for children, pregnant women, and elderly individuals without
                any side effects.
              </p>
              <p className="text-muted-foreground">
                12. Homeopathy can be taken alongside other forms of treatment,
                but always consult your doctor before doing so.
              </p>
              <p className="text-muted-foreground">
                13. Today, homeopathy is widely accepted in medical science and
                is effective for many chronic and acute diseases.
              </p>
              <p className="text-muted-foreground">
                14. Homeopathy treats a person holistically, addressing mental,
                emotional, and physical aspects of health. It is useful for
                chronic diseases like asthma, diabetes, arthritis, and skin
                disorders.
              </p>
              <p className="text-muted-foreground">
                15. A positive mindset and regular medical follow-ups are
                essential for effective treatment. Always maintain communication
                with your homeopathic doctor.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <HeadingSec className="px-3 [text-shadow:_0_2px_4px_#fff633]">
              {" "}
              Myths and Facts about{" "}
              <em className="text-primary relative">
                Homeopathy{" "}
                <Image
                  src={streak}
                  alt="streak"
                  className="absolute -top-10 right-0"
                />
              </em>
            </HeadingSec>
            <div className="flex flex-col gap-5 sm:grid md:grid-cols-2">
              <div className="hover:border-primary space-y-6 rounded-md border p-4">
                <p className="text-2xl font-bold">
                  <span className="text-primary">Myth: </span> Homeopathy is not
                  effective in surgical cases
                </p>
                <p className="text-2xl font-bold">Fact:</p>
                <p className="text-muted-foreground">
                  It is incorrect to say that homeopathy is ineffective in
                  surgical cases. In fact, surgery is a part of homeopathy.
                  Homeopathic medicines are highly beneficial in many surgical
                  cases, which can be treated without the need for surgery.
                  Conditions like piles, tonsils, fissures, and kidney stones
                  can be effectively treated with homeopathy. Patients are given
                  complete medication based on their symptoms, leading to a full
                  recovery without surgery.
                </p>
              </div>

              <div className="hover:border-primary space-y-6 rounded-md border p-4">
                <p className="text-2xl font-bold">
                  <span className="text-primary">Myth: </span> Homeopathy is
                  only good for children
                </p>
                <p className="text-2xl font-bold">Fact:</p>
                <p className="text-muted-foreground">
                  It is a misconception that homeopathy is only effective for
                  children. The reason children prefer homeopathic medicines is
                  due to their sweet taste, making them easier to consume.
                  Additionally, homeopathic medicines are completely safe,
                  making them ideal for use from childhood, ensuring better
                  health development in the long run. Homeopathic medicines not
                  only cure diseases but also strengthen the immune system,
                  providing long-term health benefits. They are equally
                  effective for people of all age groups.
                </p>
              </div>

              <div className="hover:border-primary space-y-6 rounded-md border p-4">
                <p className="text-2xl font-bold">
                  <span className="text-primary">Myth: </span> Onion, garlic,
                  coffee, tea, and spices interfere with homeopathic treatment
                </p>
                <p className="text-2xl font-bold">Fact:</p>
                <p className="text-muted-foreground">
                  Some doctors advise against consuming onion, garlic, tea, and
                  coffee with homeopathic medicines. However, studies have shown
                  that moderate consumption of these foods does not affect the
                  effectiveness of homeopathic remedies. If taken in limited
                  quantities and not immediately before or after medication,
                  they do not interfere with the treatment. Homeopathy works
                  effectively regardless of dietary habits.
                </p>
              </div>
              <div className="hover:border-primary space-y-6 rounded-md border p-4">
                <p className="text-2xl font-bold">
                  <span className="text-primary">Myth: </span> Homeopathy works
                  very slowly
                </p>
                <p className="text-2xl font-bold">Fact:</p>
                <p className="text-muted-foreground">
                  The speed of homeopathic treatment depends on the nature of
                  the disease. For acute conditions like fever, cold, pain, and
                  infections, homeopathy can provide quick relief if taken
                  correctly. Chronic diseases like arthritis, asthma, eczema,
                  and other long-term conditions require a longer treatment
                  period, just like any other medical system. Homeopathy focuses
                  on eliminating diseases from the root, making its treatment
                  highly effective in the long run.
                </p>
              </div>

              <div className="hover:border-primary space-y-6 rounded-md border p-4">
                <p className="text-2xl font-bold">
                  <span className="text-primary">Myth: </span> Diseases worsen
                  after taking homeopathic treatment
                </p>
                <p className="text-2xl font-bold">Fact:</p>
                <p className="text-muted-foreground">
                  It is a misconception that homeopathic medicines worsen
                  symptoms. In reality, they stimulate the body&lsquo;s natural
                  healing process, which may sometimes cause a temporary
                  aggravation of symptoms. This is a positive sign that the body
                  is responding to the treatment. Homeopathy helps eliminate
                  diseases from their roots, leading to complete and long-term
                  recovery.
                </p>
              </div>

              <div className="hover:border-primary space-y-6 rounded-md border p-4">
                <p className="text-2xl font-bold">
                  <span className="text-primary">Myth: </span> Homeopathy cannot
                  be taken with allopathy or other treatments
                </p>
                <p className="text-2xl font-bold">Fact:</p>
                <p className="text-muted-foreground">
                  It is a common belief that homeopathic medicines should not be
                  taken alongside allopathic or other treatments. However, if a
                  person has been on long-term allopathic medication, they can
                  continue taking it while gradually transitioning to homeopathy
                  under a doctor&lsquo;s supervision. In many cases, homeopathy
                  complements other treatments without causing any adverse
                  effects. It is recommended to maintain a 15-20 minute gap
                  between taking homeopathic and other medications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
