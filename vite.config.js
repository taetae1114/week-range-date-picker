import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
		outDir: "date-picker-week-range", //����ļ�����
		lib: {
			entry: path.resolve(__dirname, "./src/components/weekrange/index.js"), //ָ�������������ļ�
			name: "date-picker-week-range",
			fileName: "date-picker-week-range",
		}, //�����ģʽ����
		rollupOptions: {
			// ȷ���ⲿ��������Щ�㲻�������������
			external: ["vue"],
			output: {
				// �� UMD ����ģʽ��Ϊ��Щ�ⲿ���������ṩһ��ȫ�ֱ���
				globals: {
					vue: "Vue",
				},
			},
		}, // rollup�������
	},

})
