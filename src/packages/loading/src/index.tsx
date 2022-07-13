import type { PropType } from 'vue';
import { h, defineComponent, toRefs, Teleport } from 'vue';
import classNames from '@/composables/useClassName';
import './style.scss';

const LoaderProps = {
  modelValue: {
    type: Boolean as PropType<true>,
    default: false
  },
  loadingText: {
    type: String as PropType<string>,
    default: ''
  },
  size: {
    type: String as PropType<string>,
    default: 'md'
  },
  color: {
    type: String as PropType<string>,
    default: '#A6A6A6'
  },
  to: {
    type: String as PropType<string>,
    default: null
  },
};

export default defineComponent({
  name: 'ELoading',
  props: LoaderProps,
  setup(props) {
    const { modelValue, loadingText, size, color, to } = toRefs(props);

    const sizeStyle = () => {
      switch (size.value) {
        case 'xs':
          return {
            height: '16px',
            width: '16px'
          };
        case 'sm':
          return {
            height: '18px',
            width: '18px'
          };
        case 'md':
          return {
            height: '36px',
            width: '36px'
          };
        case 'lg':
          return {
            height: '64px',
            width: '64px'
          };
        default:
          return {
            height: '36px',
            width: '36px'
          };
      }
    };

    const spanClass = () => {
      return classNames(['loading-text', `${size.value}-text`]);
    };

    const loadingStyle: any = {
      ...sizeStyle(),
      borderTopColor: color.value,
    };
    return () => (
      // h not have Teleport|string type
      modelValue && h(to.value ? (Teleport as unknown as string) : 'div', {
        class: 'loading',
        to: to.value,
      }, [
        h('div', { style: loadingStyle, class: 'loading-spinner' }),
        loadingText.value && h('span', {
          class: spanClass(),
        }, loadingText.value)
      ])
    );
  }
});