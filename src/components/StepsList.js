import React from "react";
import { motion } from "framer-motion";

const StepsList = ({ steps }) => {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white bg-opacity-50 rounded-lg shadow-md p-4 border border-teal-200"
        >
          <h3 className="text-lg font-semibold mb-2 text-blue-900">
            {step.step}
          </h3>
          <p className="text-gray-700">{step.message}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default StepsList;
