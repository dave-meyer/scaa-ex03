/**
 * @param {Object} event - Input event to the Lambda function
 * @param {Object} context - Lambda Context runtime methods and attributes
 *
 * @returns {Object} object - Object
 */
export const lambdaHandler = async (event, context) => {
    return { 'success': true }
};
