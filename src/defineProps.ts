import DarkModeButton from './components/DarkModeButton.vue';
import ChartBar from './components/ChartBar.vue';
import ChartLine from './components/ChartLine.vue';

const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults } = await import(
   'vue'
);
const __VLS_componentsOption = {};
let __VLS_name!: 'App';
function __VLS_template() {
   let __VLS_ctx!: InstanceType<__VLS_PickNotAny<typeof __VLS_internalComponent, new () => {}>> & {};
   /* Components */
   let __VLS_otherComponents!: NonNullable<typeof __VLS_internalComponent extends { components: infer C } ? C : {}> &
      typeof __VLS_componentsOption;
   let __VLS_own!: __VLS_SelfComponent<
      typeof __VLS_name,
      typeof __VLS_internalComponent & (new () => { $slots: typeof __VLS_slots })
   >;
   let __VLS_localComponents!: typeof __VLS_otherComponents &
      Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>;
   let __VLS_components!: typeof __VLS_localComponents & __VLS_GlobalComponents & typeof __VLS_ctx;
   /* Style Scoped */
   type __VLS_StyleScopedClasses = {};
   let __VLS_styleScopedClasses!:
      | __VLS_StyleScopedClasses
      | keyof __VLS_StyleScopedClasses
      | (keyof __VLS_StyleScopedClasses)[];
   /* CSS variable injection */
   /* CSS variable injection end */
   let __VLS_resolvedLocalAndGlobalComponents!: {} & __VLS_WithComponent<
      'DarkModeButton',
      typeof __VLS_localComponents,
      'DarkModeButton',
      'DarkModeButton',
      'DarkModeButton'
   > &
      __VLS_WithComponent<'ChartBar', typeof __VLS_localComponents, 'ChartBar', 'ChartBar', 'ChartBar'> &
      __VLS_WithComponent<'ChartLine', typeof __VLS_localComponents, 'ChartLine', 'ChartLine', 'ChartLine'>;
   __VLS_intrinsicElements.div;
   __VLS_intrinsicElements.div;
   __VLS_intrinsicElements.div;
   __VLS_intrinsicElements.div;
   __VLS_intrinsicElements.div;
   __VLS_intrinsicElements.div;
   __VLS_components.DarkModeButton;
   // @ts-ignore
   [DarkModeButton];
   __VLS_components.ChartBar;
   // @ts-ignore
   [ChartBar];
   __VLS_intrinsicElements.br;
   __VLS_intrinsicElements.br;
   __VLS_intrinsicElements.br;
   __VLS_intrinsicElements.br;
   __VLS_intrinsicElements.br;
   __VLS_intrinsicElements.br;
   __VLS_intrinsicElements.br;
   __VLS_intrinsicElements.br;
   __VLS_intrinsicElements.br;
   __VLS_components.ChartLine;
   // @ts-ignore
   [ChartLine];
   {
      const __VLS_0 = __VLS_intrinsicElements['div'];
      const __VLS_1 = __VLS_elementAsFunctionalComponent(__VLS_0);
      const __VLS_2 = __VLS_1({ ...{}, style: {} }, ...__VLS_functionalComponentArgsRest(__VLS_1));
      (
         ({}) as (
            props: __VLS_FunctionalComponentProps<typeof __VLS_0, typeof __VLS_2> & Record<string, unknown>,
         ) => void
      )({ ...{}, style: {} });
      const __VLS_3 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)!;
      let __VLS_4!: __VLS_NormalizeEmits<typeof __VLS_3.emit>;
      {
         const __VLS_5 = (
            {} as 'DarkModeButton' extends keyof typeof __VLS_ctx
               ? { DarkModeButton: typeof __VLS_ctx.DarkModeButton }
               : typeof __VLS_resolvedLocalAndGlobalComponents
         ).DarkModeButton;
         const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{} }));
         (({}) as { DarkModeButton: typeof __VLS_5 }).DarkModeButton;
         const __VLS_7 = __VLS_6({ ...{} }, ...__VLS_functionalComponentArgsRest(__VLS_6));
         (
            ({}) as (
               props: __VLS_FunctionalComponentProps<typeof __VLS_5, typeof __VLS_7> & Record<string, unknown>,
            ) => void
         )({ ...{} });
         const __VLS_8 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7)!;
         let __VLS_9!: __VLS_NormalizeEmits<typeof __VLS_8.emit>;
      }
      {
         const __VLS_10 = __VLS_intrinsicElements['div'];
         const __VLS_11 = __VLS_elementAsFunctionalComponent(__VLS_10);
         const __VLS_12 = __VLS_11({ ...{}, style: {} }, ...__VLS_functionalComponentArgsRest(__VLS_11));
         (
            ({}) as (
               props: __VLS_FunctionalComponentProps<typeof __VLS_10, typeof __VLS_12> & Record<string, unknown>,
            ) => void
         )({ ...{}, style: {} });
         const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_10, __VLS_12)!;
         let __VLS_14!: __VLS_NormalizeEmits<typeof __VLS_13.emit>;
         {
            const __VLS_15 = (
               {} as 'ChartBar' extends keyof typeof __VLS_ctx
                  ? { ChartBar: typeof __VLS_ctx.ChartBar }
                  : typeof __VLS_resolvedLocalAndGlobalComponents
            ).ChartBar;
            const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({ ...{} }));
            (({}) as { ChartBar: typeof __VLS_15 }).ChartBar;
            const __VLS_17 = __VLS_16({ ...{} }, ...__VLS_functionalComponentArgsRest(__VLS_16));
            (
               ({}) as (
                  props: __VLS_FunctionalComponentProps<typeof __VLS_15, typeof __VLS_17> & Record<string, unknown>,
               ) => void
            )({ ...{} });
            const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_15, __VLS_17)!;
            let __VLS_19!: __VLS_NormalizeEmits<typeof __VLS_18.emit>;
         }
         __VLS_13.slots!.default;
      }
      {
         const __VLS_20 = __VLS_intrinsicElements['br'];
         const __VLS_21 = __VLS_elementAsFunctionalComponent(__VLS_20);
         const __VLS_22 = __VLS_21({ ...{} }, ...__VLS_functionalComponentArgsRest(__VLS_21));
         (
            ({}) as (
               props: __VLS_FunctionalComponentProps<typeof __VLS_20, typeof __VLS_22> & Record<string, unknown>,
            ) => void
         )({ ...{} });
         const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22)!;
         let __VLS_24!: __VLS_NormalizeEmits<typeof __VLS_23.emit>;
      }
      {
         const __VLS_25 = __VLS_intrinsicElements['br'];
         const __VLS_26 = __VLS_elementAsFunctionalComponent(__VLS_25);
         const __VLS_27 = __VLS_26({ ...{} }, ...__VLS_functionalComponentArgsRest(__VLS_26));
         (
            ({}) as (
               props: __VLS_FunctionalComponentProps<typeof __VLS_25, typeof __VLS_27> & Record<string, unknown>,
            ) => void
         )({ ...{} });
         const __VLS_28 = __VLS_pickFunctionalComponentCtx(__VLS_25, __VLS_27)!;
         let __VLS_29!: __VLS_NormalizeEmits<typeof __VLS_28.emit>;
      }
      {
         const __VLS_30 = __VLS_intrinsicElements['br'];
         const __VLS_31 = __VLS_elementAsFunctionalComponent(__VLS_30);
         const __VLS_32 = __VLS_31({ ...{} }, ...__VLS_functionalComponentArgsRest(__VLS_31));
         (
            ({}) as (
               props: __VLS_FunctionalComponentProps<typeof __VLS_30, typeof __VLS_32> & Record<string, unknown>,
            ) => void
         )({ ...{} });
         const __VLS_33 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)!;
         let __VLS_34!: __VLS_NormalizeEmits<typeof __VLS_33.emit>;
      }
      {
         const __VLS_35 = __VLS_intrinsicElements['br'];
         const __VLS_36 = __VLS_elementAsFunctionalComponent(__VLS_35);
         const __VLS_37 = __VLS_36({ ...{} }, ...__VLS_functionalComponentArgsRest(__VLS_36));
         (
            ({}) as (
               props: __VLS_FunctionalComponentProps<typeof __VLS_35, typeof __VLS_37> & Record<string, unknown>,
            ) => void
         )({ ...{} });
         const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_35, __VLS_37)!;
         let __VLS_39!: __VLS_NormalizeEmits<typeof __VLS_38.emit>;
      }
      {
         const __VLS_40 = __VLS_intrinsicElements['br'];
         const __VLS_41 = __VLS_elementAsFunctionalComponent(__VLS_40);
         const __VLS_42 = __VLS_41({ ...{} }, ...__VLS_functionalComponentArgsRest(__VLS_41));
         (
            ({}) as (
               props: __VLS_FunctionalComponentProps<typeof __VLS_40, typeof __VLS_42> & Record<string, unknown>,
            ) => void
         )({ ...{} });
         const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42)!;
         let __VLS_44!: __VLS_NormalizeEmits<typeof __VLS_43.emit>;
      }
      {
         const __VLS_45 = __VLS_intrinsicElements['br'];
         const __VLS_46 = __VLS_elementAsFunctionalComponent(__VLS_45);
         const __VLS_47 = __VLS_46({ ...{} }, ...__VLS_functionalComponentArgsRest(__VLS_46));
         (
            ({}) as (
               props: __VLS_FunctionalComponentProps<typeof __VLS_45, typeof __VLS_47> & Record<string, unknown>,
            ) => void
         )({ ...{} });
         const __VLS_48 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47)!;
         let __VLS_49!: __VLS_NormalizeEmits<typeof __VLS_48.emit>;
      }
      {
         const __VLS_50 = __VLS_intrinsicElements['br'];
         const __VLS_51 = __VLS_elementAsFunctionalComponent(__VLS_50);
         const __VLS_52 = __VLS_51({ ...{} }, ...__VLS_functionalComponentArgsRest(__VLS_51));
         (
            ({}) as (
               props: __VLS_FunctionalComponentProps<typeof __VLS_50, typeof __VLS_52> & Record<string, unknown>,
            ) => void
         )({ ...{} });
         const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52)!;
         let __VLS_54!: __VLS_NormalizeEmits<typeof __VLS_53.emit>;
      }
      {
         const __VLS_55 = __VLS_intrinsicElements['br'];
         const __VLS_56 = __VLS_elementAsFunctionalComponent(__VLS_55);
         const __VLS_57 = __VLS_56({ ...{} }, ...__VLS_functionalComponentArgsRest(__VLS_56));
         (
            ({}) as (
               props: __VLS_FunctionalComponentProps<typeof __VLS_55, typeof __VLS_57> & Record<string, unknown>,
            ) => void
         )({ ...{} });
         const __VLS_58 = __VLS_pickFunctionalComponentCtx(__VLS_55, __VLS_57)!;
         let __VLS_59!: __VLS_NormalizeEmits<typeof __VLS_58.emit>;
      }
      {
         const __VLS_60 = __VLS_intrinsicElements['br'];
         const __VLS_61 = __VLS_elementAsFunctionalComponent(__VLS_60);
         const __VLS_62 = __VLS_61({ ...{} }, ...__VLS_functionalComponentArgsRest(__VLS_61));
         (
            ({}) as (
               props: __VLS_FunctionalComponentProps<typeof __VLS_60, typeof __VLS_62> & Record<string, unknown>,
            ) => void
         )({ ...{} });
         const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62)!;
         let __VLS_64!: __VLS_NormalizeEmits<typeof __VLS_63.emit>;
      }
      {
         const __VLS_65 = __VLS_intrinsicElements['div'];
         const __VLS_66 = __VLS_elementAsFunctionalComponent(__VLS_65);
         const __VLS_67 = __VLS_66({ ...{}, style: {} }, ...__VLS_functionalComponentArgsRest(__VLS_66));
         (
            ({}) as (
               props: __VLS_FunctionalComponentProps<typeof __VLS_65, typeof __VLS_67> & Record<string, unknown>,
            ) => void
         )({ ...{}, style: {} });
         const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_65, __VLS_67)!;
         let __VLS_69!: __VLS_NormalizeEmits<typeof __VLS_68.emit>;
         {
            const __VLS_70 = (
               {} as 'ChartLine' extends keyof typeof __VLS_ctx
                  ? { ChartLine: typeof __VLS_ctx.ChartLine }
                  : typeof __VLS_resolvedLocalAndGlobalComponents
            ).ChartLine;
            const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({ ...{} }));
            (({}) as { ChartLine: typeof __VLS_70 }).ChartLine;
            const __VLS_72 = __VLS_71({ ...{} }, ...__VLS_functionalComponentArgsRest(__VLS_71));
            (
               ({}) as (
                  props: __VLS_FunctionalComponentProps<typeof __VLS_70, typeof __VLS_72> & Record<string, unknown>,
               ) => void
            )({ ...{} });
            const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72)!;
            let __VLS_74!: __VLS_NormalizeEmits<typeof __VLS_73.emit>;
         }
         __VLS_68.slots!.default;
      }
      __VLS_3.slots!.default;
   }
   if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
   }
   var __VLS_slots!: {};
   return __VLS_slots;
}
const __VLS_internalComponent = (await import('vue')).defineComponent({
   setup() {
      return {
         DarkModeButton: DarkModeButton as typeof DarkModeButton,
         ChartBar: ChartBar as typeof ChartBar,
         ChartLine: ChartLine as typeof ChartLine,
      };
   },
});
export default (await import('vue')).defineComponent({
   setup() {
      return {};
   },
});
