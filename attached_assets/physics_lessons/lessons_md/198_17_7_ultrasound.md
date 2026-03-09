# 17.7 Ultrasound

[Original URL](https://openstax.org/books/college-physics-2e/pages/17-7-ultrasound)

## 17.7 Ultrasound

### Learning Objectives

By the end of this section, you will be able to:

*   Define acoustic impedance and intensity reflection coefficient.
*   Describe medical and other uses of ultrasound technology.
*   Calculate acoustic impedance using density values and the speed of ultrasound.
*   Calculate the velocity of a moving object using Doppler-shifted ultrasound.

![An ultrasound image of a 21 week old fetus.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/71d35095f8d0cb4b4312d575e9a9a3b4016c7610)

Figure 17.40 Ultrasound is used in medicine to painlessly and noninvasively monitor patient health and diagnose a wide range of disorders. (credit: abbybatchelder, Flickr)

Any sound with a frequency above 20,000 Hz (or 20 kHz)—that is, above the highest audible frequency—is defined to be ultrasound. In practice, it is possible to create ultrasound frequencies up to more than a gigahertz. (Higher frequencies are difficult to create; furthermore, they propagate poorly because they are very strongly absorbed.) Ultrasound has a tremendous number of applications, which range from burglar alarms to use in cleaning delicate objects to the guidance systems of bats. We begin our discussion of ultrasound with some of its applications in medicine, in which it is used extensively both for diagnosis and for therapy.

The characteristics of ultrasound, such as frequency and intensity, are wave properties common to all types of waves. Ultrasound also has a wavelength that limits the fineness of detail it can detect. This characteristic is true of all waves. We can never observe details significantly smaller than the wavelength of our probe; for example, we will never see individual atoms with visible light, because the atoms are so small compared with the wavelength of light.

### Ultrasound in Medical Therapy

Ultrasound, like any wave, carries energy that can be absorbed by the medium carrying it, producing effects that vary with intensity. When focused to intensities of 103103 to 105105 W/m2W/m2, ultrasound can be used to shatter gallstones or pulverize cancerous tissue in surgical procedures. (See [Figure 17.41](17-7-ultrasound#import-auto-id2669723).) Intensities this great can damage individual cells, variously causing their protoplasm to stream inside them, altering their permeability, or rupturing their walls through _cavitation_. Cavitation is the creation of vapor cavities in a fluid—the longitudinal vibrations in ultrasound alternatively compress and expand the medium, and at sufficient amplitudes the expansion separates molecules. Most cavitation damage is done when the cavities collapse, producing even greater shock pressures.

![A picture of a brain tumor being removed from the skull using a clinical probe.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/15f74586c2a4f5437ddfd6ffcf39dca74141ca1c)

Figure 17.41 The tip of this small probe oscillates at 23 kHz with such a large amplitude that it pulverizes tissue on contact. The debris is then aspirated. The speed of the tip may exceed the speed of sound in tissue, thus creating shock waves and cavitation, rather than a smooth simple harmonic oscillator–type wave.

Most of the energy carried by high-intensity ultrasound in tissue is converted to thermal energy. In fact, intensities of 103103 to 104W/m2104W/m2 are commonly used for deep-heat treatments called ultrasound diathermy. Frequencies of 0.8 to 1 MHz are typical. In both athletics and physical therapy, ultrasound diathermy is most often applied to injured or overworked muscles to relieve pain and improve flexibility. Skill is needed by the therapist to avoid “bone burns” and other tissue damage caused by overheating and cavitation, sometimes made worse by reflection and focusing of the ultrasound by joint and bone tissue.

In some instances, you may encounter a different decibel scale, called the sound _pressure_ level, when ultrasound travels in water or in human and other biological tissues. We shall not use the scale here, but it is notable that numbers for sound pressure levels range 60 to 70 dB higher than you would quote for ββ, the sound intensity level used in this text. Should you encounter a sound pressure level of 220 decibels, then, it is not an astronomically high intensity, but equivalent to about 155 dB—high enough to destroy tissue, but not as unreasonably high as it might seem at first.

### Ultrasound in Medical Diagnostics

When used for imaging, ultrasonic waves are emitted from a transducer, a crystal exhibiting the piezoelectric effect (the expansion and contraction of a substance when a voltage is applied across it, causing a vibration of the crystal). These high-frequency vibrations are transmitted into any tissue in contact with the transducer. Similarly, if a pressure is applied to the crystal (in the form of a wave reflected off tissue layers), a voltage is produced which can be recorded. The crystal therefore acts as both a transmitter and a receiver of sound. Ultrasound is also partially absorbed by tissue on its path, both on its journey away from the transducer and on its return journey. From the time between when the original signal is sent and when the reflections from various boundaries between media are received, (as well as a measure of the intensity loss of the signal), the nature and position of each boundary between tissues and organs may be deduced.

Reflections at boundaries between two different media occur because of differences in a characteristic known as the acoustic impedance _ZZ_ of each substance. Impedance is defined as

Z\=ρv,Z\=ρv,

17.38

where ρρ is the density of the medium (in kg/m3kg/m3) and vv is the speed of sound through the medium (in m/s). The units for ZZ are therefore kg/(m2·s)kg/(m2·s).

[Table 17.5](17-7-ultrasound#import-auto-id2672118) shows the density and speed of sound through various media (including various soft tissues) and the associated acoustic impedances. Note that the acoustic impedances for soft tissue do not vary much but that there is a big difference between the acoustic impedance of soft tissue and air and also between soft tissue and bone.

Medium

Density (kg/m3)

Speed of Ultrasound (m/s)

Acoustic Impedance ( kg/ ( m 2 ⋅ s ) ) ( kg/ ( m 2 ⋅ s ) )

Air

1.3

330

429429

Water

1000

1500

1.5×1061.5×106

Blood

1060

1570

1.66×1061.66×106

Fat

925

1450

1.34×1061.34×106

Muscle (average)

1075

1590

1.70×1061.70×106

Bone (varies)

1400–1900

4080

5.7×1065.7×106 to 7.8×1067.8×106

Barium titanate (transducer material)

5600

5500

30.8×10630.8×106

Table 17.5 The Ultrasound Properties of Various Media, Including Soft Tissue Found in the Body

At the boundary between media of different acoustic impedances, some of the wave energy is reflected and some is transmitted. The greater the _difference_ in acoustic impedance between the two media, the greater the reflection and the smaller the transmission.

The intensity reflection coefficient aa is defined as the ratio of the intensity of the reflected wave relative to the incident (transmitted) wave. This statement can be written mathematically as

a\=Z2−Z12Z1+Z22,a\=Z2−Z12Z1+Z22,

17.39

where Z1Z1 and Z2Z2 are the acoustic impedances of the two media making up the boundary. A reflection coefficient of zero (corresponding to total transmission and no reflection) occurs when the acoustic impedances of the two media are the same. An impedance “match” (no reflection) provides an efficient coupling of sound energy from one medium to another. The image formed in an ultrasound is made by tracking reflections (as shown in [Figure 17.42](17-7-ultrasound#import-auto-id2672567)) and mapping the intensity of the reflected sound waves in a two-dimensional plane.

#### Calculate Acoustic Impedance and Intensity Reflection Coefficient: Ultrasound and Fat Tissue

(a) Using the values for density and the speed of ultrasound given in [Table 17.5](17-7-ultrasound#import-auto-id2672118), show that the acoustic impedance of fat tissue is indeed 1.34×106kg/(m2·s)1.34×106kg/(m2·s).

(b) Calculate the intensity reflection coefficient of ultrasound when going from fat to muscle tissue.

#### Strategy for (a)

The acoustic impedance can be calculated using Z\=ρvZ\=ρv and the values for ρρ and vv found in [Table 17.5](17-7-ultrasound#import-auto-id2672118).

#### Solution for (a)

(1) Substitute known values from [Table 17.5](17-7-ultrasound#import-auto-id2672118) into Z\=ρvZ\=ρv.

Z \= ρv \= 925 kg /m 3 1450 m/s Z \= ρv \= 925 kg /m 3 1450 m/s

17.40

(2) Calculate to find the acoustic impedance of fat tissue.

1.34×106kg/(m2·s)1.34×106kg/(m2·s)

17.41

This value is the same as the value given for the acoustic impedance of fat tissue.

#### Strategy for (b)

The intensity reflection coefficient for any boundary between two media is given by a\=Z2−Z12Z1+Z22a\=Z2−Z12Z1+Z22, and the acoustic impedance of muscle is given in [Table 17.5](17-7-ultrasound#import-auto-id2672118).

#### Solution for (b)

Substitute known values into a\=Z2−Z12Z1+Z22a\=Z2−Z12Z1+Z22 to find the intensity reflection coefficient:

a \= Z 2 − Z 1 2 Z 1 + Z 2 2 \= 1 . 34 × 10 6 kg/(m 2 · s) − 1.70 × 10 6 kg/(m 2 · s) 2 1 . 70 × 10 6 kg/(m 2 · s) + 1 . 34 × 10 6 kg/(m 2 · s) 2 \= 0 . 014 a \= Z 2 − Z 1 2 Z 1 + Z 2 2 \= 1 . 34 × 10 6 kg/(m 2 · s) − 1.70 × 10 6 kg/(m 2 · s) 2 1 . 70 × 10 6 kg/(m 2 · s) + 1 . 34 × 10 6 kg/(m 2 · s) 2 \= 0 . 014

17.42

#### Discussion

This result means that only 1.4% of the incident intensity is reflected, with the remaining being transmitted.

The applications of ultrasound in medical diagnostics have produced untold benefits with no known risks. Diagnostic intensities are too low (about 10−2W/m210−2W/m2) to cause thermal damage. More significantly, ultrasound has been in use for several decades and detailed follow-up studies do not show evidence of ill effects, quite unlike the case for x-rays.

![The first part of the diagram shows a rectangular shaped transducer with speaker and microphone sending spherical waves to produce echos from a fetus. The second part shows a graph of echo intensity versus time, with four sharp peaks.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/a0dc58613e80596841f1d7a6881d6f0d26d8860c)

Figure 17.42 (a) An ultrasound speaker doubles as a microphone. Brief bleeps are broadcast, and echoes are recorded from various depths. (b) Graph of echo intensity versus time. The time for echoes to return is directly proportional to the distance of the reflector, yielding this information noninvasively.

The most common ultrasound applications produce an image like that shown in [Figure 17.43](17-7-ultrasound#import-auto-id3408221). The speaker-microphone broadcasts a directional beam, sweeping the beam across the area of interest. This is accomplished by having multiple ultrasound sources in the probe’s head, which are phased to interfere constructively in a given, adjustable direction. Echoes are measured as a function of position as well as depth. A computer constructs an image that reveals the shape and density of internal structures.

![The first part of the diagram shows an ultrasound device scanning a woman’s abdomen. The second part of the diagram is an ultrasound scan report of the abdomen.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/b36c12e273f2cfdef9b75c0bc6df06ae1fc06b3d)

Figure 17.43 (a) An ultrasonic image is produced by sweeping the ultrasonic beam across the area of interest, in this case the person's abdomen. Data are recorded and analyzed in a computer, providing a two-dimensional image (credit: COD Newsroom, Flickr). (b) Ultrasound image of 12-week-old fetus. (credit: Public Health Image Library, CDC)

How much detail can ultrasound reveal? The image in [Figure 17.43](17-7-ultrasound#import-auto-id3408221) is typical of low-cost systems, but that in [Figure 17.44](17-7-ultrasound#import-auto-id1401205) shows the remarkable detail possible with more advanced systems, including 3D imaging. Ultrasound today is commonly used in prenatal care. Such imaging can be used to see if the fetus is developing at a normal rate, and help in the determination of serious problems early in the pregnancy. Ultrasound is also in wide use to image the chambers of the heart and the flow of blood within the beating heart, using the Doppler effect (echocardiology).

Whenever a wave is used as a probe, it is very difficult to detect details smaller than its wavelength λλ. Indeed, current technology cannot do quite this well. Abdominal scans may use a 7-MHz frequency, and the speed of sound in tissue is about 1540 m/s—so the wavelength limit to detail would be λ\=vwf\=1540 m/s7×106Hz\=0.22 mmλ\=vwf\=1540 m/s7×106Hz\=0.22 mm. In practice, 1-mm detail is attainable, which is sufficient for many purposes. Higher-frequency ultrasound would allow greater detail, but it does not penetrate as well as lower frequencies do. The accepted rule of thumb is that you can effectively scan to a depth of about 500λ500λ into tissue. For 7 MHz, this penetration limit is 500×0.22 mm500×0.22 mm, which is 0.11 m. Higher frequencies may be employed in smaller organs, such as the eye, but are not practical for looking deep into the body.

![This is an image of a 3D ultrasound scan of the fetus showing an unborn baby sucking its thumb.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/9685722a2b35bc7f035dc5c6da789dfe75ea0f8d)

Figure 17.44 A 3D ultrasound image of a fetus. (credit: Jennie Cu, Wikimedia Commons)

In addition to shape information, ultrasonic scans can produce density information superior to that found in X-rays, because the intensity of a reflected sound is related to changes in density. Sound is most strongly reflected at places where density changes are greatest.

Another major use of ultrasound in medical diagnostics is to detect motion and determine velocity through the Doppler shift of an echo, known as Doppler-shifted ultrasound. This technique is used to monitor fetal heartbeat, measure blood velocity, and detect occlusions in blood vessels, for example. (See [Figure 17.45](17-7-ultrasound#import-auto-id2032586).) The magnitude of the Doppler shift in an echo is directly proportional to the velocity of whatever reflects the sound. Because an echo is involved, there is actually a double shift. The first occurs because the reflector (say a fetal heart) is a moving observer and receives a Doppler-shifted frequency. The reflector then acts as a moving source, producing a second Doppler shift.

![Doppler-shifted ultrasonic image of a partially occluded artery.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/b3623dbea6fe322bc357071d823f755baf5c673e)

Figure 17.45 This Doppler-shifted ultrasonic image of a partially occluded artery uses color to indicate velocity. The highest velocities are in red, while the lowest are blue. The blood must move faster through the constriction to carry the same flow. (credit: Arning C, Grzyska U, Wikimedia Commons)

A clever technique is used to measure the Doppler shift in an echo. The frequency of the echoed sound is superimposed on the broadcast frequency, producing beats. The beat frequency is FB\=∣f1−f2∣FB\=∣f1−f2∣, and so it is directly proportional to the Doppler shift (f1−f2f1−f2) and hence, the reflector’s velocity. The advantage in this technique is that the Doppler shift is small (because the reflector’s velocity is small), so that great accuracy would be needed to measure the shift directly. But measuring the beat frequency is easy, and it is not affected if the broadcast frequency varies somewhat. Furthermore, the beat frequency is in the audible range and can be amplified for audio feedback to the medical observer.

Doppler-shifted radar echoes are used to measure wind velocities in storms as well as aircraft and automobile speeds. The principle is the same as for Doppler-shifted ultrasound. There is evidence that bats and dolphins may also sense the velocity of an object (such as prey) reflecting their ultrasound signals by observing its Doppler shift.

#### Calculate Velocity of Blood: Doppler-Shifted Ultrasound

Ultrasound that has a frequency of 2.50 MHz is sent toward blood in an artery that is moving toward the source at 20.0 cm/s, as illustrated in [Figure 17.46](17-7-ultrasound#import-auto-id3209774). Use the speed of sound in human tissue as 1540 m/s. (Assume that the frequency of 2.50 MHz is accurate to seven significant figures.)

1.  What frequency does the blood receive?
2.  What frequency returns to the source?
3.  What beat frequency is produced if the source and returning frequencies are mixed?

![The picture represents an ultrasound device scanning the arteries and veins of a human hand.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/6ab9835f10f1368fb26ee9dbd3d2356a6f225e53)

Figure 17.46 Ultrasound is partly reflected by blood cells and plasma back toward the speaker-microphone. Because the cells are moving, two Doppler shifts are produced—one for blood as a moving observer, and the other for the reflected sound coming from a moving source. The magnitude of the shift is directly proportional to blood velocity.

#### Strategy

The first two questions can be answered using fobs\=fsvwvw±vsfobs\=fsvwvw±vs and fobs\=fsvw±vobsvwfobs\=fsvw±vobsvw for the Doppler shift. The last question asks for beat frequency, which is the difference between the original and returning frequencies.

#### Solution for (a)

(1) Identify knowns:

*   The blood is a moving observer, and so the frequency it receives is given by
    
    fobs\=fsvw±vobsvw.fobs\=fsvw±vobsvw.
    
    17.43
    
*   vbvb is the blood velocity (vobsvobs here) and the plus sign is chosen because the motion is toward the source.

(2) Enter the given values into the equation.

f obs \= 2, 500 , 000 Hz 1540 m/s + 0 . 2 m/s 1540 m/s f obs \= 2, 500 , 000 Hz 1540 m/s + 0 . 2 m/s 1540 m/s

17.44

(3) Calculate to find the frequency: 2,500,325 Hz.

#### Solution for (b)

(1) Identify knowns:

*   The blood acts as a moving source.
*   The microphone acts as a stationary observer.
*   The frequency leaving the blood is 2,500,325 Hz, but it is shifted upward as given by
    
    fobs\=fsvwvw–vb.fobs\=fsvwvw–vb.
    
    17.45
    
    fobsfobs is the frequency received by the speaker-microphone.
    
*   The source velocity is vbvb.
*   The minus sign is used because the motion is toward the observer.

The minus sign is used because the motion is toward the observer.

(2) Enter the given values into the equation:

f obs \= 2, 500 , 325 Hz 1540 m/s 1540 m/s − 0 . 200 m/s f obs \= 2, 500 , 325 Hz 1540 m/s 1540 m/s − 0 . 200 m/s

17.46

(3) Calculate to find the frequency returning to the source: 2,500,649 Hz.

#### Solution for (c)

(1) Identify knowns:

*   The beat frequency is simply the absolute value of the difference between fsfs and fobsfobs, as stated in:
    
    fB\=∣fobs−fs∣.fB\=∣fobs−fs∣.
    
    17.47
    

(2) Substitute known values:

∣ 2, 500 , 649 Hz − 2, 500 , 000 Hz ∣ ∣ 2, 500 , 649 Hz − 2, 500 , 000 Hz ∣

17.48

(3) Calculate to find the beat frequency: 649 Hz.

#### Discussion

The Doppler shifts are quite small compared with the original frequency of 2.50 MHz. It is far easier to measure the beat frequency than it is to measure the echo frequency with an accuracy great enough to see shifts of a few hundred hertz out of a couple of megahertz. Furthermore, variations in the source frequency do not greatly affect the beat frequency, because both fsfs and fobsfobswould increase or decrease. Those changes subtract out in fB\=∣fobs−fs∣.fB\=∣fobs−fs∣.

Industrial, retail, and research applications of ultrasound are common. A few are discussed here. Ultrasonic cleaners have many uses. Jewelry, machined parts, and other objects that have odd shapes and crevices are immersed in a cleaning fluid that is agitated with ultrasound typically about 40 kHz in frequency. The intensity is great enough to cause cavitation, which is responsible for most of the cleansing action. Because cavitation-produced shock pressures are large and well transmitted in a fluid, they reach into small crevices where even a low-surface-tension cleaning fluid might not penetrate.

Sonar is a familiar application of ultrasound. Sonar typically employs ultrasonic frequencies in the range from 30.0 to 100 kHz. Bats, dolphins, submarines, and even some birds use ultrasonic sonar. Echoes are analyzed to give distance and size information both for guidance and finding prey. In most sonar applications, the sound reflects quite well because the objects of interest have significantly different density than the medium in which they travel. When the Doppler shift is observed, velocity information can also be obtained. Submarine sonar can be used to obtain such information, and there is evidence that some bats also sense velocity from their echoes.

Similarly, there are a range of relatively inexpensive devices that measure distance by timing ultrasonic echoes. Many cameras, for example, use such information to focus automatically. Some doors open when their ultrasonic ranging devices detect a nearby object, and certain home security lights turn on when their ultrasonic rangers observe motion. Ultrasonic “measuring tapes” also exist to measure such things as room dimensions. Sinks in public restrooms are sometimes automated with ultrasound devices to turn faucets on and off when people wash their hands. These devices reduce the spread of germs and can conserve water.

Ultrasound is used for nondestructive testing in industry and by the military. Because ultrasound reflects well from any large change in density, it can reveal cracks and voids in solids, such as aircraft wings, that are too small to be seen with x-rays. For similar reasons, ultrasound is also good for measuring the thickness of coatings, particularly where there are several layers involved.

Basic research in solid state physics employs ultrasound. Its attenuation is related to a number of physical characteristics, making it a useful probe. Among these characteristics are structural changes such as those found in liquid crystals, the transition of a material to a superconducting phase, as well as density and other properties.

These examples of the uses of ultrasound are meant to whet the appetites of the curious, as well as to illustrate the underlying physics of ultrasound. There are many more applications, as you can easily discover for yourself.

Why is it possible to use ultrasound both to observe a fetus in the womb and also to destroy cancerous tumors in the body?

#### Solution

Ultrasound can be used medically at different intensities. Lower intensities do not cause damage and are used for medical imaging. Higher intensities can pulverize and destroy targeted substances in the body, such as tumors.