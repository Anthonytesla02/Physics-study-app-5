# 10.3 Dynamics of Rotational Motion: Rotational Inertia

[Original URL](https://openstax.org/books/college-physics-2e/pages/10-3-dynamics-of-rotational-motion-rotational-inertia)

## 10.3 Dynamics of Rotational Motion: Rotational Inertia

### Learning Objectives

By the end of this section, you will be able to:

*   Understand the relationship between force, mass and acceleration.
*   Study the turning effect of force.
*   Study the analogy between force and torque, mass and moment of inertia, and linear acceleration and angular acceleration.

If you have ever spun a bike wheel or pushed a merry-go-round, you know that force is needed to change angular velocity as seen in [Figure 10.9](10-3-dynamics-of-rotational-motion-rotational-inertia#import-auto-id1545882). In fact, your intuition is reliable in predicting many of the factors that are involved. For example, we know that a door opens slowly if we push too close to its hinges. Furthermore, we know that the more massive the door, the more slowly it opens. The first example implies that the farther the force is applied from the pivot, the greater the angular acceleration; another implication is that angular acceleration is inversely proportional to mass. These relationships should seem very similar to the familiar relationships among force, mass, and acceleration embodied in Newton’s second law of motion. There are, in fact, precise rotational analogs to both force and mass.

![The given figure shows a bike tire being pulled by a hand with a force F backward indicated by a red horizontal arrow that produces an angular acceleration alpha indicated by a curved yellow arrow in counter-clockwise direction.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/82d280df59b68e472cb8cd1ceb4dcc6bde3521b8)

Figure 10.9 Force is required to spin the bike wheel. The greater the force, the greater the angular acceleration produced. The more massive the wheel, the smaller the angular acceleration. If you push on a spoke closer to the axle, the angular acceleration will be smaller.

To develop the precise relationship among force, mass, radius, and angular acceleration, consider what happens if we exert a force FF on a point mass mm that is at a distance rr from a pivot point, as shown in [Figure 10.10](10-3-dynamics-of-rotational-motion-rotational-inertia#import-auto-id2062858). Because the force is perpendicular to rr, an acceleration a\=Fma\=Fm is obtained in the direction of FF. We can rearrange this equation such that F\=maF\=ma and then look for ways to relate this expression to expressions for rotational quantities. We note that a\=rαa\=rα, and we substitute this expression into F\=maF\=ma, yielding

F\=mrα.F\=mrα.

10.40

Recall that torque is the turning effectiveness of a force. In this case, because FF is perpendicular to rr, torque is simply τ\=Frτ\=Fr. So, if we multiply both sides of the equation above by rr, we get torque on the left-hand side. That is,

rF \= mr 2 α rF \= mr 2 α

10.41

or

τ\=mr2α.τ\=mr2α.

10.42

This last equation is the rotational analog of Newton’s second law (F\=maF\=ma), where torque is analogous to force, angular acceleration is analogous to translational acceleration, and mr2mr2 is analogous to mass (or inertia). The quantity mr2mr2 is called the rotational inertia or moment of inertia of a point mass mm a distance rr from the center of rotation.

![The given figure shows an object of mass m, kept on a horizontal frictionless table, attached to a pivot point, which is in the center of the table, by a cord that supplies centripetal force. A force F is applied to the object perpendicular to the radius r, which is indicated by a red arrow tangential to the circle, causing the object to move in counterclockwise direcion.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/89a20772c2d3e4c3cee514b01d7b24770795b011)

Figure 10.10 An object is supported by a horizontal frictionless table and is attached to a pivot point by a cord that supplies centripetal force. A force FF is applied to the object perpendicular to the radius rr, causing it to accelerate about the pivot point. The force is kept perpendicular to rr.

Dynamics for rotational motion is completely analogous to linear or translational dynamics. Dynamics is concerned with force and mass and their effects on motion. For rotational motion, we will find direct analogs to force and mass that behave just as we would expect from our earlier experiences.

### Rotational Inertia and Moment of Inertia

Before we can consider the rotation of anything other than a point mass like the one in [Figure 10.10](10-3-dynamics-of-rotational-motion-rotational-inertia#import-auto-id2062858), we must extend the idea of rotational inertia to all types of objects. To expand our concept of rotational inertia, we define the moment of inertia II of an object to be the sum of mr2mr2 for all the point masses of which it is composed. That is, I\=∑mr2I\=∑mr2. Here II is analogous to mm in translational motion. Because of the distance rr, the moment of inertia for any object depends on the chosen axis. Actually, calculating II is beyond the scope of this text except for one simple case—that of a hoop, which has all its mass at the same distance from its axis. A hoop’s moment of inertia around its axis is therefore MR2MR2, where MM is its total mass and RR its radius. (We use MM and RR for an entire object to distinguish them from mm and rr for point masses.) In all other cases, we must consult [Figure 10.11](10-3-dynamics-of-rotational-motion-rotational-inertia#fs-id1838666) (note that the table is piece of artwork that has shapes as well as formulae) for formulas for II that have been derived from integration over the continuous body. Note that II has units of mass multiplied by distance squared (kg⋅m2kg⋅m2), as we might expect from its definition.

The general relationship among torque, moment of inertia, and angular acceleration is

net τ \= Iα net τ \= Iα

10.43

or

α\=net τI,α\=net τI,

10.44

where net ττ is the total torque from all forces relative to a chosen axis. For simplicity, we will only consider torques exerted by forces in the plane of the rotation. Such torques are either positive or negative and add like ordinary numbers. The relationship in τ\=Iα, α\=net τIτ\=Iα, α\=net τI is the rotational analog to Newton’s second law and is very generally applicable. This equation is actually valid for _any_ torque, applied to _any_ object, relative to _any_ axis.

As we might expect, the larger the torque is, the larger the angular acceleration is. For example, the harder a child pushes on a merry-go-round, the faster it accelerates. Furthermore, the more massive a merry-go-round, the slower it accelerates for the same torque. The basic relationship between moment of inertia and angular acceleration is that the larger the moment of inertia, the smaller is the angular acceleration. But there is an additional twist. The moment of inertia depends not only on the mass of an object, but also on its _distribution_ of mass relative to the axis around which it rotates. For example, it will be much easier to accelerate a merry-go-round full of children if they stand close to its axis than if they all stand at the outer edge. The mass is the same in both cases, but the moment of inertia is much larger when the children are at the edge.

Cut out a circle that has about a 10 cm radius from stiff cardboard. Near the edge of the circle, write numbers 1 to 12 like hours on a clock face. Position the circle so that it can rotate freely about a horizontal axis through its center, like a wheel. (You could loosely nail the circle to a wall.) Hold the circle stationary and with the number 12 positioned at the top, attach a lump of blue putty (sticky material used for fixing posters to walls) at the number 3. How large does the lump need to be to just rotate the circle? Describe how you can change the moment of inertia of the circle. How does this change affect the amount of blue putty needed at the number 3 to just rotate the circle? Change the circle’s moment of inertia and then try rotating the circle by using different amounts of blue putty. Repeat this process several times.

1.  _Examine the situation to determine that torque and mass are involved in the rotation_. Draw a careful sketch of the situation.
2.  _Determine the system of interest_.
3.  _Draw a free body diagram_. That is, draw and label all external forces acting on the system of interest.
4.  _Apply net τ\=Iα, α\=net τI net τ\=Iα, α\=net τI, the rotational equivalent of Newton’s second law, to solve the problem_. Care must be taken to use the correct moment of inertia and to consider the torque about the point of rotation.
5.  _As always, check the solution to see if it is reasonable_.

In statics, the net torque is zero, and there is no angular acceleration. In rotational motion, net torque is the cause of angular acceleration, exactly as in Newton’s second law of motion for rotation.

![Illustrations of ten different objects accompanied by their rotational inertias.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/0ce2f1bcca194f81d8ff088acd144ea083c6e771)

Figure 10.11 Some rotational inertias.

#### Calculating the Effect of Mass Distribution on a Merry-Go-Round

Consider the father pushing a playground merry-go-round in [Figure 10.12](10-3-dynamics-of-rotational-motion-rotational-inertia#import-auto-id1468671). He exerts a force of 250 N at the edge of the 50.0-kg merry-go-round, which has a 1.50 m radius. Calculate the angular acceleration produced (a) when no one is on the merry-go-round and (b) when an 18.0-kg child sits 1.25 m away from the center. Consider the merry-go-round itself to be a uniform disk with negligible retarding friction.

![The given figure shows a man pushing a merry-go-round by a force F, indicated by a red arrow which is perpendicular to the radius r, of the merry-go-round, such that it moves in counter-clockwise direction.](/apps/image-cdn/v1/f=webp/apps/archive/20260105.231123/resources/f311b39ccb2a61f1f9f109f70f03bbaf46be19de)

Figure 10.12 A father pushes a playground merry-go-round at its edge and perpendicular to its radius to achieve maximum torque.

#### Strategy

Angular acceleration is given directly by the expression α \= net τ I α \= net τ I :

α \= τ I . α \= τ I .

10.45

To solve for αα, we must first calculate the torque ττ (which is the same in both cases) and moment of inertia II (which is greater in the second case). To find the torque, we note that the applied force is perpendicular to the radius and friction is negligible, so that

τ\=rFsin θ\=(1.50 m)(250 N)\=375 N⋅m.τ\=rFsin θ\=(1.50 m)(250 N)\=375 N⋅m.

10.46

#### Solution for (a)

The moment of inertia of a solid disk about this axis is given in [Figure 10.11](10-3-dynamics-of-rotational-motion-rotational-inertia#fs-id1838666) to be

12MR2,12MR2,

10.47

where M\=50.0 kgM\=50.0 kg and R\=1.50 mR\=1.50 m, so that

I\=(0.500)(50.0 kg)(1.50 m)2\=56.25 kg⋅m2.I\=(0.500)(50.0 kg)(1.50 m)2\=56.25 kg⋅m2.

10.48

Now, after we substitute the known values, we find the angular acceleration to be

α\=τI\=375 N⋅m56.25 kg⋅m2\=6.67rads2.α\=τI\=375 N⋅m56.25 kg⋅m2\=6.67rads2.

10.49

#### Solution for (b)

We expect the angular acceleration for the system to be less in this part, because the moment of inertia is greater when the child is on the merry-go-round. To find the total moment of inertia II, we first find the child’s moment of inertia IcIc by considering the child to be equivalent to a point mass at a distance of 1.25 m from the axis. Then,

Ic\=MR2\=(18.0 kg)(1.25 m)2\=28.13 kg⋅m2.Ic\=MR2\=(18.0 kg)(1.25 m)2\=28.13 kg⋅m2.

10.50

The total moment of inertia is the sum of moments of inertia of the merry-go-round and the child (about the same axis). To justify this sum to yourself, examine the definition of II:

I \= 28.13 kg ⋅ m 2 + 56.25 kg ⋅ m 2 \= 84.38 kg ⋅ m 2 . I \= 28.13 kg ⋅ m 2 + 56.25 kg ⋅ m 2 \= 84.38 kg ⋅ m 2 .

10.51

Substituting known values into the equation for αα gives

α\=τI\=375 N⋅m84.38 kg⋅m2\=4.44rads2.α\=τI\=375 N⋅m84.38 kg⋅m2\=4.44rads2.

10.52

#### Discussion

The angular acceleration is less when the child is on the merry-go-round than when the merry-go-round is empty, as expected. The angular accelerations found are quite large, partly due to the fact that friction was considered to be negligible. If, for example, the father kept pushing perpendicularly for 2.00 s, he would give the merry-go-round an angular velocity of 13.3 rad/s when it is empty but only 8.89 rad/s when the child is on it. In terms of revolutions per second, these angular velocities are 2.12 rev/s and 1.41 rev/s, respectively. The father would end up running at about 50 km/h in the first case. Summer Olympics, here he comes! Confirmation of these numbers is left as an exercise for the reader.

Torque is the analog of force and moment of inertia is the analog of mass. Force and mass are physical quantities that depend on only one factor. For example, mass is related solely to the numbers of atoms of various types in an object. Are torque and moment of inertia similarly simple?

#### Solution

No. Torque depends on three factors: force magnitude, force direction, and point of application. Moment of inertia depends on both mass and its distribution relative to the axis of rotation. So, while the analogies are precise, these rotational quantities depend on more factors.